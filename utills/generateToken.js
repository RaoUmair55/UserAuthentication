import jwt from "jsonwebtoken";

const generateAccessToken = (userId, email) => {
    return jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET, { expiresIn: "25h" });
}

const generateRefreshToken = (userId, email) => {
    return jwt.sign({ id: userId, email: email }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

export { generateAccessToken, generateRefreshToken };