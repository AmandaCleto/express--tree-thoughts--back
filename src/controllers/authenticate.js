const User = require('../models/user');
const { generateToken } = require('../helpers/jwtGenerate');
const bcrypt = require('bcryptjs');
const { ThrowErrorCustom } = require('../utils/error');

async function authenticate(req, res) {
    try {
        const { email: emailReceived, password: passwordReceived } = req.body;

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

        const doesUserExist = await User.scope('withPassword').findOne({
            where: {
                email: emailReceived
            }
        });

        if(!doesUserExist) {
            throw new ThrowErrorCustom({
                message: 'Usuário não existe',
                status: 404
            })
        }

        const doesPasswordValid = bcrypt.compareSync(passwordReceived, doesUserExist.password);

       if(!doesPasswordValid) {
            throw new ThrowErrorCustom({
                message: 'Senha inválida',
                status: 404
            })
        }

        const tokenJwt = generateToken({ userId: doesUserExist.id });
        return res.json({token: tokenJwt});
    } catch (errors) {
        ThrowErrorCustom.getErrors(res, errors);
    }
}

module.exports = { authenticate }