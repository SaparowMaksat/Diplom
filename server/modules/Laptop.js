const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		model: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = model('Laptop', schema)
