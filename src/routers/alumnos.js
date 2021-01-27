const express = require('express')

const controller = require('../controllers/alumnosControllers')

const router = express.Router()

router.get('/alumnos',controller.getData)

router.get('/alumnos/:id',controller.getDatabyID)

router.post('/alumnos/',controller.createRegister)

router.post('/alumnos/:id',controller.updateRegister)

router.delete('/alumnos/:id',controller.deleteRegister)

module.exports = router