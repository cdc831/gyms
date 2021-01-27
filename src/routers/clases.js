const express = require('express')

const controller = require('../controllers/clasesControllers')

const router = express.Router()

router.get('/clases',controller.getData)

router.get('/clases/:id',controller.getDatabyID)

router.post('/clases/',controller.createRegister)

router.post('/clases/:id',controller.updateRegister)

router.delete('/clases/:id',controller.deleteRegister)

module.exports = router