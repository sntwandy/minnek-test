import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (token: string) => {
	let isVerified;
		const decoded = jwt.verify(token, SECRET_KEY || "");
		const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    console.log(decoded)
		if (typeof decoded === "string") {
			// El token no pudo ser decodificado correctamente
			isVerified = false;
		} else if (decoded.exp && decoded.exp < currentTimeInSeconds) {
			isVerified = false;
		} else {
			isVerified = true;
	}
	console.log(isVerified);
};

export default verifyToken;
