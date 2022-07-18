const path = require('path');

const login = (req,res, next) => {
    if(req.session?.user) {
        next()
    } else {
        return res.redirect('/login')
    }
}


const loginFile = (req,res) => {
    res.sendFile(path.join(__dirname, '../public','login.html'))
}

const loginPost = (req,res) => {
    const {user} = req.body
    req.session.user = user
    return res.redirect('/')
}

const logout = (req,res) => {
    req.session.destroy((err) => {
        if (err) res.send(err)
        else {
            console.log('pruieba');
            return res.redirect('/login')
        }
    })
}

const logUser = (req,res,next) => {
    if(req.session?.user ) res.send(req.session.user)
    else res.send('invitado')
}


module.exports = {login, loginFile, loginPost, logout, logUser}