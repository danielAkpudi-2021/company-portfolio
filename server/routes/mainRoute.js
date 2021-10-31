const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

Router.get('/', displayIndex);

module.exports = router;