const { Router } = require('express');
const router = Router();
const { authMiddleware } = require('../middlewares/authentication');
const userController = require('../controllers/user');

router.post('/user/create', userController.create);

module.exports = router;