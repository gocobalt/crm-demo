import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";
import PaginatedModel from "../PaginatedModel";

@modelOptions({ schemaOptions: { timestamps: false, minimize: false } })
class Lead extends PaginatedModel {
    @prop({ required: true })
    public name!: string;

    @prop({ required: true })
    public phone!: string;

    @prop({ required: true })
    public email!: string;

    @prop({ required: true })
    public company!: string;

    @prop({ required: true })
    session_id!: string;
}

const LeadModel = getModelForClass(Lead);

export default LeadModel;
