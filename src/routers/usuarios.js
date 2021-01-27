const express = require('express')

const controller = require('../controllers/usersControllers')

const router = express.Router()

router.get('/users',controller.getData)

router.get('/users/:id',controller.getDatabyID)

router.post('/users/',controller.createRegister)

router.post('/users/:id',controller.updateRegister)

router.delete('/users/:id',controller.deleteRegister)

module.exports = router