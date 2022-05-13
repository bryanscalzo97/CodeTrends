import express from 'express'
import temasController from '../controllers/temas.controller.js'

const route = express.Router()

route.get('/', temasController.viewAll)

export default route
