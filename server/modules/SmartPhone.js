const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		model: { type: String },
		image: { type: String },
		price: { type: Number },
		title: { type: String },
		year: { type: Number },
		color: { type: String },
	},
	{
		timestamps: true,
	}
)

module.exports = model('SmartPhone', schema)
