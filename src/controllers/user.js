const Users = require('../models/users');

async function create(req, res) {
    const { name, email, password } = req.body;

    const userCreated = await Users.create({
        name, 
        email, 
        password
    });

    if(userCreated) {
        return res.json({userCreated});
    } else {
        return res.status(500).json({userCreated});
    }

}

module.exports = {
    create
}