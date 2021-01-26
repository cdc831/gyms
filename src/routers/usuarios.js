const express = require('express')

const controller = require('../controllers/usersControllers')

const router = express.Router()

router.get('/users',controller.getData)

module.exports = router