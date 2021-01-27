const express = require('express')
const router = express.Router()
const controller = require('../controllers/rutinaControllers')

router.get('/rutinas',controller.getData)

router.get('/rutinas/:id',controller.getDatabyID)

router.post('/rutinas/',controller.createRegister)

router.post('/rutinas/:id',controller.updateRegister)

router.delete('/rutinas/:id',controller.deleteRegister)

module.exports = router