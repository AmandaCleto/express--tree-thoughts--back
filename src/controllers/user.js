const User = require('../models/user');

async function create(req, res) {
    try {
        const { name: nameReceived, email: emailReceived, password: passwordReceived } = req.body;

        const doesUserCreated = await User.create({
            name: nameReceived,
            email: emailReceived,
            password: passwordReceived
        });

        return res.json({doesUserCreated});

    } catch ({erros}) {
        const { message, path } = errors[0];
        return res.status(400).json({
            [path]: message
        });
    }
}

async function get(req, res) {
    try {
        const { userId } = req;

        const getUser = await User.findByPk(userId);

        return res.json({getUser});

    } catch ({erros}) {
        const { message, path } = errors[0];
        return res.status(400).json({
            [path]: message
        });
    }
}

module.exports = {
    create,
    get
}