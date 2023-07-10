const jwt = require('jsonwebtoken')
const config = require('config')
const Token = require('../modules/Token')

class TokenService {
	generate(payload) {
		const accessToken = jwt.sign(payload, config.get('accessSecret'), {
			expiresIn: '1h',
		})
		const refreshToken = jwt.sign(payload, config.get('refreshSecret'))
		return { accessToken, refreshToken, expiresIn: 3600 }
	}
	async save(user, refreshToken) {
		const data = await Token.findOne({ user })
		if (data) {
			data.refreshToken = refreshToken
			return data.save()
		}
		const token = await Token.create({ user, refreshToken })
		return token
	}
	validateRefresh(refresh) {
		try {
			return jwt.verify(refresh, config.get('refreshSecret'))
		} catch (error) {
			return null
		}
	}
	validateAccess(access) {
		try {
			return jwt.verify(access, config.get('accessSecret'))
		} catch (error) {
			return null
		}
	}
	async findToken(refreshToken) {
		try {
			return await Token.findOne({ refreshToken })
		} catch (error) {
			return null
		}
	}
}

module.exports = new TokenService()
