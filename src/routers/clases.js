const express = require('express')

const controller = require('../controllers/clasesControllers')

const router = express.Router()

router.get('/clases',controller.getData)

module.exports = router