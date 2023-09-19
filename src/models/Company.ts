import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";
import PaginatedModel from "./PaginatedModel";

class AppConnection {
    @prop({ required: true })
    app_type!: string;

    @prop({ required: true })
    id!: string;
}

@modelOptions({ schemaOptions: { timestamps: false, minimize: false } })
export class Company extends PaginatedModel {
    @prop()
    name?: string;

    @prop()
    industry?: string;

    @prop()
    website?: string;

    @prop()
    employees?: number;

    @prop()
    session_id?: string;

    @prop({ type: () => [AppConnection], _id: false })
    app_connections!: AppConnection[];
}

const CompanyModel = getModelForClass(Company);

export default CompanyModel;
