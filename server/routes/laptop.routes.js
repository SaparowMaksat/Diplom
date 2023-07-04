const express = require('express')
const Laptop = require('../modules/Laptop')

const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
	try {
		const list = await Laptop.find()
		res.status(200).send(list)
	} catch (error) {
		res.status(500).json({
			message: 'На сервере произошла ошибка. Побробуйте позже',
		})
	}
})

module.exports = router
