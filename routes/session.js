const express = require("express")

const {Router} = express

const session = Router()

const {loginFile, loginPost, logout, logUser} = require('../controllers/login');

session.get('/login', loginFile)

session.post('/login', loginPost)

session.get('/logout', logout)

session.get('/usuario', logUser)

module.exports = session