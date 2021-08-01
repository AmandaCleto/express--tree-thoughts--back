const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const process = require('process');

async function authenticate(req, res) {
    try {
        const { email: emailReceived, password: passwordReceived } = req.body;

        const doesUserExist = await User.scope('withPassword').findOne({
            where: {
                email: emailReceived
            }
        });

        if (!doesUserExist) {
            throw new Error('bad!');
        }

        const doesPasswordValid = bcrypt.compareSync(passwordReceived, doesUserExist.password);

        if (!doesPasswordValid) {
            throw new Error('noo!!');
        }

        const tokenJwt = jwt.sign(
            { userId: doesUserExist.id }, // payload = data
            process.env.JWT_SECRET, // secret key
            { algorithm: 'HS256', expiresIn: '12h' } // configs with iat
        );

        return res.json({token: tokenJwt});
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
}

module.exports = { authenticate }