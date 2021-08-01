const Thought = require('../models/thought');

async function create(req, res) {
    try {
        const {
            description: descriptionReceived,
            emotion_id: emotionIdReceived
        } = req.body;

        const doesThoughtCreated = await Thought.create({
            user_id: req.userId,
            description: descriptionReceived,
            emotion_id: emotionIdReceived,
        });

        return res.json({doesThoughtCreated});
    } catch ({errors}) {
        const { message, path } = errors[0];
        return res.status(400).json({
            [path]: message
        });
    }
}

async function get(req, res) {
    try {
        const doesThoughtFound = await Thought.findAll({
            where: {
                user_id: req.userId,
            }
        });

        return res.json({doesThoughtFound})

    } catch ({errors}) {
        const { message, path } = errors[0];
        return res.status(400).json({
            [path]: message
        });
    }
}

async function destroy(req, res) {
    try {
        const { thought_id } = req.params;
        const doesThoughtFound = await Thought.destroy({
            where: {
                id: thought_id,
                user_id: req.userId,
            }
        });

        return res.json({doesThoughtFound})

    } catch ({errors}) {
        const { message, path } = errors[0];
        return res.status(400).json({
            [path]: message
        });
    }
}

async function update(req, res) {
    try {
        const { thought_id: thoughtIdReceived } = req.params;

        const { description: descriptionReceived, emotion_id: emotionIdReceived } = req.body;

        const doesThoughtFound = await Thought.update(
            {
                description: descriptionReceived, //passing descriptionReceived from 'req.body' to description from Model
                emotion_id: emotionIdReceived //passing emotionIdReceived from 'req.body' to emotion_id from Model
            },
            {
                where: {
                    id: thoughtIdReceived, //which thought it is
                    user_id: req.userId, //whose thought it is
                }
            }
        );

        return res.json({doesThoughtFound})

    } catch ({errors}) {
        const { message, path } = errors[0];
        return res.status(400).json({
            [path]: message
        });
    }
}



module.exports = {
    create,
    get,
    destroy,
    update
};