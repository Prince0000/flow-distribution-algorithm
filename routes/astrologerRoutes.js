const express = require('express');
const router = express.Router();
const { distribute, toggleTopAstrologer, adjustTopAstrologers } = require('../controllers/astrologerController');

router.get('/distribute', distribute);
router.post('/toggleTopAstrologer/:id', toggleTopAstrologer);
router.post('/adjustTopAstrologers', adjustTopAstrologers);

module.exports = router;
