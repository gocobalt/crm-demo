import { Router } from "express";
import AuthMiddlewares from "../middlewares/Auth";
import CobaltController from "../controllers/cobalt";

const CobaltRouter = Router();

CobaltRouter.get("/token", [AuthMiddlewares.tokenAuthValidate], CobaltController.getTokenForLinkedAccount);
CobaltRouter.get("/application/:slug", [AuthMiddlewares.tokenAuthValidate], CobaltController.getApplicationBySlug);
CobaltRouter.get("/applications", [AuthMiddlewares.tokenAuthValidate], CobaltController.getApplications);
CobaltRouter.post("/config", [AuthMiddlewares.tokenAuthValidate], CobaltController.findOrCreateConfig);
CobaltRouter.put("/config", [AuthMiddlewares.tokenAuthValidate], CobaltController.updateConfig);
CobaltRouter.delete("/config/:slug", [AuthMiddlewares.tokenAuthValidate], CobaltController.deleteConfig);

export { CobaltRouter };
