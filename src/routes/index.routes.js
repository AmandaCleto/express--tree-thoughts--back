const { Router } = require('express');
const router = Router();
const { authMiddleware } = require('../middlewares/authentication');


router.post('/teste',
    [authMiddleware],
    (req, res) => {
        res.status(200).json({
            authenticated: true
    });
});


module.exports = router;