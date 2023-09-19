import { Router } from "express";
import { CRMRouter } from "./crm";
import { SessionRouter } from "./session";
import { CobaltRouter } from "./cobalt";
const router = Router();

router.use("/", CRMRouter);
router.use("/session", SessionRouter);
router.use("/cobalt", CobaltRouter);

export { router };
