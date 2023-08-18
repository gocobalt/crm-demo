import jwt, { TokenExpiredError } from "jsonwebtoken";
import Locals from "./Locals";
import { Request } from "express";

const JWT_SECRET = Locals.config().jwtSecretKey;

export const generateJWTWithExpiry = (payload: any, expiry: any) => {
    try {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: expiry });
    } catch (err) {
        throw new Error(`Error creating token: ${err}`);
    }
};

export const decodeJWT = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        if (err instanceof TokenExpiredError) {
            throw err;
        } else {
            throw new Error("Invalid Token");
        }
    }
};

export const getToken = (req: Request): string => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        return req.headers.authorization.split(" ")[1];
    }
    throw new Error(`Missing Token`);
};
