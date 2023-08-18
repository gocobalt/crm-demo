import { Application } from "express";
import * as path from "path";
import * as dotenv from "dotenv";

class Locals {
    /**
     * Makes env configs available for your app
     * throughout the app's runtime
     */
    public static config(): any {
        dotenv.config({ path: path.join(__dirname, "../../.env") });

        const port = process.env.PORT || 3000;
        const mongooseUrl = process.env.MONGODB_URL;
        const name = process.env.APP_NAME || "<App_Name>";
        const apiPrefix = process.env.API_PREFIX || "api";
        const logDays = process.env.LOG_DAYS || 20;
        const jwtSecretKey = process.env.JWT_SECRET_TOKEN_KEY;
        const redis_port = process.env.REDIS_PORT;
        const redis_host = process.env.REDIS_HOST;
        const redisConfig = {
            port: redis_port,
            host: redis_host,
        };
        const deleteTestDataQueue = process.env.DELETE_TEST_DATA_QUEUE;
        const service_url = {
            embed_backend: process.env.EMBED_BACKEND,
        };
        const cobalt = {
            api_key: process.env.API_KEY,
            app_id: process.env.APP_ID,
            organization_id: process.env.ORGANIZATION_ID,
        };

        return {
            apiPrefix,
            logDays,
            mongooseUrl,
            name,
            port,
            jwtSecretKey,
            redisConfig,
            deleteTestDataQueue,
            service_url,
            cobalt,
        };
    }
}

export default Locals;
