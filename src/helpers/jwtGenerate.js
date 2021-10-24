const jwt = require('jsonwebtoken');
const process = require('process');

module.exports = {
    generateToken(data = {}) {
        const tokenJwt = jwt.sign(
            data, // payload = data
            process.env.JWT_SECRET, // secret key
            { algorithm: 'HS256', expiresIn: '12h' } // configs with iat
        );

        return tokenJwt
    }
}