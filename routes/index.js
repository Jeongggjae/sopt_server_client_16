const express = require('express');
const router = express.Router();
const songController = require('../controller/songController');

router.get('/songs', songController.getSong);






module.exports = router;


