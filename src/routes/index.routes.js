const { Router } = require('express');
const router = Router();

router.get('/teste', (req, res) => {
    res.status(200).json({
        teste: "hello world"
    });
});


module.exports = router;