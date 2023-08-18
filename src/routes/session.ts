import { Router } from "express";
import SessionController from "../controllers/session";
import AuthMiddlewares from "../middlewares/Auth";

const SessionRouter = Router();

/**
 * @route POST /api/v2/session
 * @access NonAuthed
 * @Desc Create session
 */
SessionRouter.post("/", SessionController.createSession);

/**
 * @route DELETE /api/v2/session
 * @access Authed
 * @Desc Delete session
 */
SessionRouter.delete("/", [AuthMiddlewares.tokenAuthValidate], SessionController.deleteSession);

export { SessionRouter };