import { Request, Response } from "express";
import ErrorHandler from "../providers/Error";
import SessionService from "../services/session";

export default class SessionController {
    public static async createSession(req: Request, res: Response) {
        try {
            const response = await SessionService.createSession();

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteSession(req: Request, res: Response) {
        try {
            const response = await SessionService.deleteSession(
                (req as any).token
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }
}
