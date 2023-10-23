const express = require('express')
const router = express.Router()
const vehicle = require('../controllers/vehicle.controller')

router.post('/', vehicle.create)
router.get('/', vehicle.findAll)
router.get('/:id', vehicle.findOne)
router.put('/:id', vehicle.update)
router.delete('/:id', vehicle.delete)

module.exports = router