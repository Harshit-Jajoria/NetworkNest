import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants.js";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		httpOnly: true, // more secure
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
		sameSite: "strict", // CSRF
	});

	return token;
};

export default generateTokenAndSetCookie;
