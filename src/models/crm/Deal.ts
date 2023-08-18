import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";
import PaginatedModel from "../PaginatedModel";

@modelOptions({ schemaOptions: { timestamps: false, minimize: false } })
class Deal extends PaginatedModel {
    @prop({ required: true })
    public name!: string;

    @prop({ required: true })
    public amount!: number;

    @prop({ required: true })
    public closing_date!: string;

    @prop({ required: true })
    public description!: string;

    @prop({ required: true })
    session_id!: string;
}

const DealModel = getModelForClass(Deal);

export default DealModel;
