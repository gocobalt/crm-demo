import mongoose from "mongoose";
import Locals from "./Locals";
import Logger from "./Logger";
import mongoosePaginate from "mongoose-paginate-v2";

export class Database {
    public static init(): any {
        Logger.info(`Mongoose url is ${Locals.config().mongooseUrl}`);
        mongoose
            .connect(Locals.config().mongooseUrl!)
            .then((_) => {
                Logger.info(
                    "Connected to Distribution API Database - Initial Connection"
                );
            })
            .catch((err) => {
                Logger.info(err);
                Logger.info(
                    `Initial Distribution API Database connection error occured - ${err.message}`
                );
            });
        mongoose.set("debug", true);
        mongoose.plugin(mongoosePaginate);
    }
}

export default mongoose;
