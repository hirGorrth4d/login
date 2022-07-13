const {Router} = require('express');

const sessionRouter = Router()

const {loginFile, loginPost, logout, logUser} = require('../controllers/login');

sessionRouter.get('/login', loginFile)

sessionRouter.post('/login', loginPost)

sessionRouter.get('/logout', logout)

sessionRouter.get('/usuario', logUser)

module.exports = sessionRouter