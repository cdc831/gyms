const express = require('express')

const controller = require('../controllers/tipoClasesControllers')

const router = express.Router()

router.get('/tipoclases',controller.getData)

router.get('/tipoclases/:id',controller.getDatabyID)

router.post('/tipoclases/',controller.createRegister)

router.post('/tipoclases/:id',controller.updateRegister)

router.delete('/tipoclases/:id',controller.deleteRegister)


module.exports = router