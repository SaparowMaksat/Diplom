const express = require('express')
const User = require('../modules/User')
const auth = require('../middleware/auth.middleware')
const router = express.Router({ mergeParams: true })

router.patch('/:userId', auth, async (req, res) => {
	const { userId } = req.params

	if (userId === req.user._id) {
		const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
			new: true,
		})
		res.send(updatedUser)
	} else {
		res.status(401).json({ message: 'Unauthorized' })
	}
})

router.get('/', auth, async (req, res) => {
	try {
		const list = await User.find()
		res.send(list)
	} catch (error) {
		res.status(500).json({
			message: 'На сервере произошла ошибка. Побробуйте позже',
		})
	}
})

module.exports = router
