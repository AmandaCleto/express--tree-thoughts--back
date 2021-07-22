const User = require('../models/user');

async function create(req, res) {
    try {
        const { name: nameReceived, email: emailReceived, password: passwordReceived } = req.body;

        const doesUserCreated = await User.create({
            name: nameReceived,
            email: emailReceived,
            password: passwordReceived
        });

        delete doesUserCreated.password;

        return res.json({doesUserCreated});

    } catch ({errros}) {
        const { message, path } = errors[0];
        return res.status(400).json({
            [path]: message
        });
    }
}

module.exports = {
    create
}