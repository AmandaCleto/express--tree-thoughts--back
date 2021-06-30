function authMiddleware(req, res, next) {
    const { username, password } = req.body;
    
    const database = {
        caio: {
            password: 123
        }
    }

    if(database[username]?.password === password) {
        return next();
    }else {
        res.status(401).json({
            authenticated: false
        })
        return false;
    }
}

module.exports = {
    authMiddleware
};