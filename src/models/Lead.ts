import {
    prop,
    modelOptions,
    getModelForClass,
    Ref,
} from "@typegoose/typegoose";
import PaginatedModel from "./PaginatedModel";
import { Contact } from "./Contact";

class AppConnection {
    @prop({ required: true })
    app_type!: string;

    @prop({ required: true })
    id!: string;
}

@modelOptions({ schemaOptions: { timestamps: false, minimize: false } })
export class Lead extends PaginatedModel {
    @prop()
    name?: string;

    @prop()
    phone?: string;

    @prop()
    email?: string;

    @prop()
    company?: string;

    @prop()
    contact_id?: Ref<Contact, string>;

    @prop()
    session_id?: string;

    @prop({ type: () => [AppConnection], _id: false })
    app_connections!: AppConnection[];
}

const LeadModel = getModelForClass(Lead);

export default LeadModel;
