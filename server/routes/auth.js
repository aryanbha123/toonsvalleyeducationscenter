const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authCheck');


router.get('/get/user', authMiddleware,async (req, res) => {
    res.json({ user: req.user , img:req.user.image });
});

module.exports = router;
