const User = require('../models/user');
const bcrypt = require('bcryptjs');

async function authenticate(req, res) {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({
            where: {
                email: email,
            }
        });

        if (!userExists) {
            throw new Error('deu ruim');
        }

        const validPassword = bcrypt.compareSync(password, userExists.password);

        if (!validPassword) {
            throw new Error('não não nãaaaao ela nao é modelo');
        }

        return res.json({logged: true});
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
}

module.exports = { authenticate }