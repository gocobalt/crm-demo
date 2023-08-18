import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Database } from "./providers/Database";
import Locals from "./providers/Locals";
import Logger from "./providers/Logger";
import { router } from "./routes/index";
import Jobs from "./jobs";
dotenv.config();

Jobs.initializeDeleteTestDataEventWorker();

const app = express();

Database.init();

app.use(express.json({ limit: "3mb" }));
app.use(express.urlencoded({ limit: "3mb", extended: true }));
app.use(cors());

app.use("/api/v1", router);

app.get("/health", async (req, res) => {
    return res.status(200).json({ message: "Service Running" });
});

app.listen(Locals.config().port, () => {
    Logger.info(`server started at http://localhost:${process.env.PORT}`);
});
