const Thought = require('../models/thought');
const Emotion = require('../models/emotion');
const { ThrowErrorCustom } = require('../utils/error');

async function create(req, res) {
    try {
        const {
            description: descriptionReceived,
            emotion_name: emotionNameReceived
        } = req.body;

        if(!descriptionReceived) {
            throw new ThrowErrorCustom({
                message: 'É obrigatório informar a descrição',
                status: 400
            })
        }

        if(!emotionNameReceived) {
            throw new ThrowErrorCustom({
                message: 'É obrigatório informar a cor',
                status: 400
            })
        }

        const {id: gotEmotionId} = await Emotion.findOne({
            attributes: ['id'],
            where: {
                name: emotionNameReceived
            }
        });

        const wasThoughtCreated = await Thought.create({
            user_id: req.userId,
            description: descriptionReceived,
            emotion_id: gotEmotionId,
        });

        return res.json({wasThoughtCreated});
    } catch (errors) {
        ThrowErrorCustom.getErrors(res, errors);
    }
}

async function get(req, res) {
    try {
        const wasThoughtFound = await Thought.findAll({
            order: [['id', 'DESC']],
            where: {
                user_id: req.userId,
            }
        });

        return res.json({wasThoughtFound})

    } catch (errors) {
        ThrowErrorCustom.getErrors(res, errors);
    }
}

async function destroy(req, res) {
    try {
        const { thought_id: thoughtIdReceived } = req.params;

        if(!thoughtIdReceived) {
            throw new ThrowErrorCustom({
                message: 'É obrigatório informar o id do pensamento',
                status: 400
            })
        }

        const wasThoughtFound = await Thought.destroy({
            where: {
                id: thoughtIdReceived,
                user_id: req.userId,
            }
        });

        return res.json({wasThoughtFound})

    } catch (errors) {
        ThrowErrorCustom.getErrors(res, errors);
    }
}

async function update(req, res) {
    try {
        const { thought_id: thoughtIdReceived } = req.params;
        const { description: descriptionReceived, emotion_name: emotionNameReceived } = req.body;

        if(!thoughtIdReceived) {
            throw new ThrowErrorCustom({
                message: 'É obrigatório informar o id do pensamento',
                status: 400
            })
        }

        if(!emotionNameReceived) {
            throw new ThrowErrorCustom({
                message: 'É obrigatório informar a cor',
                status: 400
            })
        }

        if(!descriptionReceived) {
            throw new ThrowErrorCustom({
                message: 'É obrigatório informar a descrição',
                status: 400
            })
        }

        const {id: gotEmotionId} = await Emotion.findOne({
            attributes: ['id'],
            where: {
                name: emotionNameReceived
            }
        });

        const wasThoughtFound = await Thought.update(
            {
                description: descriptionReceived, //passing descriptionReceived from 'req.body' to description from Model
                emotion_id: gotEmotionId //passing emotionIdReceived from 'req.body' to emotion_id from Model
            },
            {
                where: {
                    id: thoughtIdReceived, //which thought it is
                    user_id: req.userId, //whose thought it is
                }
            }
        );

        return res.json({wasThoughtFound})

    } catch ({errors}) {
        ThrowErrorCustom.getErrors(res, errors);
    }
}



module.exports = {
    create,
    get,
    destroy,
    update
};