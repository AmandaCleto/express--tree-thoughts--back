const Users = require('../models/users');

async function create(req, res) {
    try {
        const { name, email, password } = req.body;

        const userCreated = await Users.create({
            name,
            email,
            password
        });

        return res.json({userCreated});
    } catch ({errors}) {
        const { message, path } = errors[0];
        return res.status(400).json({
            [path]: message
        });
    }
}

module.exports = {
    create
}