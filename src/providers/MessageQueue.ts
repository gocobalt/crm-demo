import { Queue } from "bullmq";
import Locals from "./Locals";
import redis from "./Redis";

export const deleteCRMDataQueue = new Queue(
    Locals.config().deleteCRMDataQueue,
    {
        connection: redis.duplicate(),
        defaultJobOptions: {
            attempts: 3,
            backoff: {
                type: "exponential",
                delay: 1000,
            },
        },
    }
);
