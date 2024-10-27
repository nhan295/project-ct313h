// src/routes/bookRoute.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/:category', bookController.getBooksByCategory);

module.exports = router;
