const User = require('../models/user');
const { ThrowErrorCustom } = require('../utils/error');

async function create(req, res) {
    try {
        const { name: nameReceived, email: emailReceived, password: passwordReceived } = req.body;

        if(!nameReceived) {
            throw new ThrowErrorCustom({
                message: 'É obrigatório informar o nome.',
                status: 400
            })
        }

        if(!emailReceived) {
            throw new ThrowErrorCustom({
                message: 'É obrigatório informar o email.',
                status: 400
            })
        }

        if(!passwordReceived) {
            throw new ThrowErrorCustom({
                message: 'É obrigatório informar a senha.',
                status: 400
            })
        }

        const doesUserCreated = await User.create({
            name: nameReceived,
            email: emailReceived,
            password: passwordReceived
        }, {isNewRecord: true});

        if(!doesUserCreated) {
            throw new ThrowErrorCustom({
                message: 'Não foi possível criar o usuário',
                status: 400
            })
        }

        doesUserCreated.password = null;

        return res.json({doesUserCreated});

    } catch (errors) {
        ThrowErrorCustom.getErrors(res, errors);
    }
}

async function get(req, res) {
    try {
        const { userId } = req;

        const getUser = await User.findByPk(userId);

        if(!getUser) {
            throw new ThrowErrorCustom({
                message: 'Não foi possível obter os dados desse usuário',
                status: 404
            })
        }

        return res.json({getUser});

    } catch (errors) {
        ThrowErrorCustom.getErrors(res, errors);
    }
}

module.exports = {
    create,
    get
}