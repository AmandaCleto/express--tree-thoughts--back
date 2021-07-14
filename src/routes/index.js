const { Router } = require('express');
const router = Router();
const { authMiddleware } = require('../middlewares/authentication');
const userController = require('../controllers/user');

router.post('/user', userController.create);

module.exports = router;