
const express = require('express');
const router = express.Router();
const frasesController = require('../controller/frasesController');

// sobtener frases = /api/frases
router.get('/',
    frasesController.obtenerFrases
);

module.exports = router;
