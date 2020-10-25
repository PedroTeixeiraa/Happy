import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import User from '../models/User'

export default {
  async create(request: Request, response: Response) {

    const usersRepository = getRepository(User)

     const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
    }) 

    await schema.validate(request.body, {
      abortEarly: false
    })

    const user = usersRepository.create(request.body)

    await usersRepository.save(user)

    return response.status(201).json(user)
  }
}