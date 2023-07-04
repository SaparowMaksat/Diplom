const express = require('express')

const router = express.Router({ mergeParams: true })

router.use('/phone', require('./phone.routes'))
router.use('/laptop', require('./laptop.routes'))

module.exports = router
