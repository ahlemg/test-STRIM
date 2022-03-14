import jwt from "jsonwebtoken";
import config from '../config/config'


function verifyToken(req, res, next) {
	const token = req.headers.authorization

	if (!token) {
		res.status(401).json({
			message: "No token provided."
		})
		return
	}

	const data = jwt.verify(token, process.env.JWT_KEY);
	
	if (!data) {
		return res.status(401).json({
			message: "Failed to authenticate token."
		})
	}
	
	req.query.userId = data.id

	next()
}
export default {verifyToken}