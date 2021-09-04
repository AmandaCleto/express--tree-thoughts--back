const jwt = require('jsonwebtoken');
const process = require('process');

function authMiddleware(req, res, next) {
    try {
        const { authorization } = req.headers;

        const tokenParts = String(authorization).split(' ');

        //Bearer 289r4e3tf463g
        //[0]Bearer
        //[1]289r4e3tf463g

        if(tokenParts[0] !== 'Bearer' || tokenParts.length !== 2) {
            throw new Error('bad!');
        }

        const jwtPayload = jwt.verify(tokenParts[1], process.env.JWT_SECRET);

        if(!jwtPayload.userId) {
            throw new Error('bad!');
        }

        req.userId = jwtPayload.userId;

        return next();
    } catch ({message}) {
        return res.status(400).json({error: message});
    }
}

module.exports = {
    authMiddleware
};