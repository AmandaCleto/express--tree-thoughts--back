const { Router } = require('express');
const router = Router();
const { authMiddleware } = require('../middlewares/authentication');
const userController = require('../controllers/user');
const authenticateController = require('../controllers/authenticate');

router.post('/user', userController.create);
router.post('/authenticate', authenticateController.authenticate);

module.exports = router;