import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'
import UsersController from './controllers/UsersController'

const routes = Router()
const upload = multer(uploadConfig)

// ORPHANAGES
routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

// USERS

routes.post('/users', UsersController.create)
routes.post('/authentication', UsersController.authentication)
export default routes