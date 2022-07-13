const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const advancedOptions = {useNewUrlParser: true, useUnifiedTopology: true}
const port = process.env.PORT || 8080
const {login, loginFile, loginPost, logout} = require('./controllers/login');


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://admin:admin@cluster0.ivdj1.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions: advancedOptions
    }),
    secret: 'admin',
    resave: true,
    cookie: {maxAge:60000},
    saveUninitialized: true
}))

app.get('/', login)

app.get('/login', loginFile)

app.post('/login', loginPost)

app.get('/logout', logout)

app.use(express.static('public'))
app.listen(port, () => {
    console.log('server running on port ' + port)
})