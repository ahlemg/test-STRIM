import config from "../config/config"
const jwt = require("jsonwebtoken")

// default expires in 24 hours
const generateToken = (data, times = 1, defaultExpire = 86400) => {
	return jwt.sign(data, config.jwtKey, {
		expiresIn: defaultExpire * times 
	})
}

const verifyToken = (token) => {
	try {
		return jwt.verify(token, config.jwtKey)
	} catch (err) {
		return null
	}
}

export default {
	generateToken,
	verifyToken
}
