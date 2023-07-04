const SmartPhone = require('../modules/SmartPhone')
const Laptop = require('../modules/Laptop')
const smartphonesMock = require('../mock/smartphones.json')
const laptopsMock = require('../mock/laptops.json')

module.exports = async () => {
	const smartphones = await SmartPhone.find()
	if (smartphones.length !== smartphonesMock.length) {
		await createInitialEntity(SmartPhone, smartphonesMock)
	}
	const laptops = await Laptop.find()
	if (laptops.length !== laptopsMock.length) {
		await createInitialEntity(Laptop, laptopsMock)
	}
}

async function createInitialEntity(Model, data) {
	await Model.collection.drop()
	return Promise.all(
		data.map(async item => {
			try {
				delete item._id
				const newItem = new Model(item)
				await newItem.save()
				return newItem
			} catch (error) {
				return error
			}
		})
	)
}
