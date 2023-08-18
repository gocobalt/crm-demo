import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";
import PaginatedModel from "../PaginatedModel";

@modelOptions({ schemaOptions: { timestamps: false, minimize: false } })
class Company extends PaginatedModel {
    @prop({ required: true })
    name!: string;

    @prop({ required: true })
    industry!: string;

    @prop({ required: true })
    website!: string;

    @prop({ required: true })
    employees!: number;

    @prop({ required: true })
    session_id!: string;
}

const CompanyModel = getModelForClass(Company);

export default CompanyModel;
