const express = require('express')
const router = express.Router()
const firmRoutes = require('./firm.routes')
const vehicleRoutes = require('./vehicle.routes')

router.use('/firms', firmRoutes)
router.use('/vehicles', vehicleRoutes)

module.exports = router