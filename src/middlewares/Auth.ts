import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../providers/Error";
import { decodeJWT, getToken } from "../providers/JWT";

export default class AuthMiddlewares {
    static tokenAuthValidate(
        request: Request | any,
        response: Response,
        next: NextFunction
    ) {
        try {
            let tokenMatch = false;
            const token = getToken(request);
            const decodedToken: any = decodeJWT(token);

            // Appending decoded info in request variable
            request.decoded = decodedToken;
            request.token = token;

            // Adding token in query for GET request
            if (request?.body?.id == request.decoded.user_id) {
                tokenMatch = true;
            }
            if (request?.params?.userid == request.decoded.user_id) {
                tokenMatch = true;
            }
            if (!tokenMatch) {
                throw new Error(`Invalid Token`);
            }

            console.log("validation", token, request.decoded.user_id);

            next();
        } catch (err) {
            return ErrorHandler.APIErrorHandler(err, response);
        }
    }
}
