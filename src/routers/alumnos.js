const express = require('express')

const controller = require('../controllers/alumnosControllers')

const router = express.Router()

router.get('/alumnos',controller.getData)

module.exports = router