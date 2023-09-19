import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";
import PaginatedModel from "./PaginatedModel";

class AppConnection {
    @prop({ required: true })
    app_type!: string;

    @prop({ required: true })
    id!: string;
}

@modelOptions({ schemaOptions: { timestamps: false, minimize: false } })
export class Deal extends PaginatedModel {
    @prop()
    name?: string;

    @prop()
    amount?: number;

    @prop()
    closing_date?: string;

    @prop()
    description?: string;

    @prop()
    session_id?: string;

    @prop({ type: () => [AppConnection], _id: false })
    app_connections!: AppConnection[];
}

const DealModel = getModelForClass(Deal);

export default DealModel;
