const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);

router.get('/visitor', controller.getVisitors);

module.exports = router;