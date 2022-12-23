const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);
// POST / practice30 = > localhost:PORT/practice30
router.post('/practice30', controller.practice30);

// 내보내기
module.exports = router;
