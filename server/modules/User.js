const { Schema, model } = require('mongoose')

const schema = new Schema(
	{
		name: { type: String },
		email: { type: String, required: true, unique: true },
		password: { type: String },
		image: String,
		rate: Number,
		sex: { type: String, enum: ['male', 'female', 'other'] },
		phone: { type: Schema.Types.ObjectId, ref: 'SmartPhone' },
		laptop: [{ type: Schema.Types.ObjectId, ref: 'Laptop' }],
	},
	{
		timestamps: true,
	}
)

module.exports = model('User', schema)
