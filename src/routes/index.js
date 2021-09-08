const { Router } = require('express');
const router = Router();

const { authMiddleware } = require('../middlewares/authentication');

const userController = require('../controllers/user');
const authenticateController = require('../controllers/authenticate');
const thoughtController = require('../controllers/thought');

router.post('/authenticate', authenticateController.authenticate);

router.post('/user', userController.create);
router.get('/user', [authMiddleware], userController.get);

router.post('/thought', [authMiddleware], thoughtController.create);
router.get('/thought', [authMiddleware], thoughtController.get);
router.put('/thought/:thought_id', [authMiddleware], thoughtController.update);
router.delete('/thought/:thought_id', [authMiddleware], thoughtController.destroy);

module.exports = router;