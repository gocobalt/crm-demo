import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";
import PaginatedModel from "./PaginatedModel";

class AppConnection {
    @prop({ required: true })
    app_type!: string;

    @prop({ required: true })
    id!: string;
}

@modelOptions({ schemaOptions: { timestamps: false, minimize: false } })
export class Contact extends PaginatedModel {
    @prop()
    first_name?: string;

    @prop()
    last_name?: string;

    @prop()
    email?: string;

    @prop()
    phone?: string;

    @prop()
    session_id?: string;

    @prop({ type: () => [AppConnection], _id: false })
    app_connections!: AppConnection[];
}

const ContactModel = getModelForClass(Contact);

export default ContactModel;
