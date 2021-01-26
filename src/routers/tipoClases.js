const express = require('express')

const controller = require('../controllers/tipoClasesControllers')

const router = express.Router()

router.get('/tipoclases',controller.getData)

module.exports = router