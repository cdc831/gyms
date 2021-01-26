const express = require('express')
const router = express.Router()
const controller = require('../controllers/rutinaControllers')

router.get('/rutinas',controller.getData)

module.exports = router