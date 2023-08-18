import { deleteTestDataEventWorker } from "./deleteTestDataEvent";

export default class Jobs {
    public static initializeDeleteTestDataEventWorker() {
        deleteTestDataEventWorker.on("completed", (job) => {
            console.log(
                `Job with name ${job.name} and id ${job.id} executed success`
            );
        });
    }
}
