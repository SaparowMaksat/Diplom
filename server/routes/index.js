const express = require('express')

const router = express.Router({ mergeParams: true })

router.use('/auth', require('./auth.routes'))
router.use('/phone', require('./phone.routes'))
router.use('/laptop', require('./laptop.routes'))
router.use('/user', require('./user.routes'))
router.use('/comment', require('./comment.routes'))

module.exports = router
