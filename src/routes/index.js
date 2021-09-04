const { Router } = require('express');
const router = Router();

const { authMiddleware } = require('../middlewares/authentication');

const userController = require('../controllers/user');
const authenticateController = require('../controllers/authenticate');
const thoughtController = require('../controllers/thought');

router.post('/authenticate', authenticateController.authenticate); // login

router.post('/user', userController.create); // signin - register
router.get('/user', [authMiddleware], userController.get); // signin - register

router.post('/thought', [authMiddleware], thoughtController.create); // register new thought
router.get('/thought', [authMiddleware], thoughtController.get); // get list of thoughts
router.put('/thought/:thought_id', [authMiddleware], thoughtController.update); // update new thought
router.delete('/thought/:thought_id', [authMiddleware], thoughtController.destroy); // get list of thoughts

module.exports = router;