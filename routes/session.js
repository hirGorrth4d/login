const express = require("express")

const {Router} = express

const sessionRouter = Router()

const loginController = require('../controllers/login');

sessionRouter.get('/', loginController.login)

sessionRouter.get('/login', loginController.loginFile)

sessionRouter.post('/login', loginController.loginPost)

sessionRouter.get('/logout', loginController.logout)

sessionRouter.get('/usuario', loginController.logUser)

module.exports = sessionRouter