const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contact')

router.post('/success', contactController.postContact);

module.exports = router;