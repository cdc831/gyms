const express = require('express')

const controller = require('../controllers/homeControllers')

const router = express.Router()

router.get('/',controller.getData)

module.exports = router