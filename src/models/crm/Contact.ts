import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";
import PaginatedModel from "../PaginatedModel";

@modelOptions({ schemaOptions: { timestamps: false, minimize: false } })
class Contact extends PaginatedModel {
    @prop({ required: true })
    public first_name!: string;

    @prop({ required: true })
    public last_name!: string;

    @prop({ required: true })
    public email!: string;

    @prop({ required: true })
    public phone!: string;

    @prop({ required: true })
    session_id!: string;
}

const ContactModel = getModelForClass(Contact);

export default ContactModel;
