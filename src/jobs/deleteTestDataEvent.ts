import { Job, Worker } from "bullmq";
import Locals from "../providers/Locals";
import redis from "../providers/Redis";
import SessionService from "../services/session";

export const deleteTestDataEventWorker = new Worker(
    Locals.config().deleteCRMDataQueue,
    async (job: Job) => {
        try {
            await SessionService.deleteSession((job.data as any).session_id);
        } catch (err) {
            console.log(
                `Worker failed for ${Locals.config().deleteCRMDataQueue}`,
                err
            );
        }
    },
    { connection: redis.duplicate() }
);
