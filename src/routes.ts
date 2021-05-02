import { Router } from 'express'

import { SettingsController } from '@modules/Settings/controllers/SettingsController'

import { UsersController } from '@modules/Users/controllers/UsersController'

import { MessagesController } from '@modules/Messages/controllers/MessagesController'

const routes = Router()

const settingsController = new SettingsController()

const usersController = new UsersController()

const messagesController = new MessagesController()

routes.post('/settings', settingsController.create)

routes.post('/users', usersController.create)

routes.post('/messages', messagesController.create)

routes.get('/messages/:user_id', messagesController.showByUser)

export { routes }
