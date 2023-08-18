import { Response } from "express";
import { TokenExpiredError } from "jsonwebtoken";
class ErrorHandler {
    public static APIErrorHandler(err: any, res: Response) {
        console.log(err);
        if (err instanceof TokenExpiredError) {
            return res
                .status(403)
                .json({ message: "Session Expired", error: err.message });
        } else if (err instanceof Error) {
            return res
                .status(500)
                .json({ message: "Server Error", error: err.message });
        } else {
            return res
                .status(500)
                .json({ message: "Server Error of Unhandled Type" });
        }
    }
}
export default ErrorHandler;
