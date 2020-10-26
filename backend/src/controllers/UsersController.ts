import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'
import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import users_view from '../views/users_view'

import User from '../models/User'

export default {
  async create(request: Request, response: Response) {

    const {
      name,
      email,
      password,
    } = request.body

    const usersRepository = getRepository(User)

    if (await usersRepository.findOne({ email })) {
      return response.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await hash(password, 8)

    const data = {
      name,
      email,
      password: hashedPassword,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
    }) 

    await schema.validate(data, {
      abortEarly: false
    })
    
    const user = usersRepository.create(data)
    
    await usersRepository.save(user)

    return response.status(201).json(users_view.render(user))
  },

  async authentication(request: Request, response: Response) {

    const {
      email, 
      password
    } = request.body

    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({ where: { email }})

    if (!user) {
      return response.status(400).json({ message: "Email/password does not match."})
    }

    const passwordConfirm = await compare(password, user.password)

    if (!passwordConfirm) {
      return response.status(400).json({ message: "Email/password does not match."})
    }

    const token = sign({ id: user.id}, "secret", {
      expiresIn: 86400
    })

    const userFormatted = users_view.render(user)

    return response.status(200).json({ user: userFormatted, token})
  }
}