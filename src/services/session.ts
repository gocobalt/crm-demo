import { deleteTestDataQueue } from "../providers/MessageQueue";
import { generateJWTWithExpiry } from "../providers/JWT";
import CompanyModel from "../models/crm/Company";
import ContactModel from "../models/crm/Contact";
import DealModel from "../models/crm/Deal";
import LeadModel from "../models/crm/Lead";
import CobaltService from "./cobalt";
import axios from "axios";
import Locals from "../providers/Locals";

export default class SessionService {
    public static async createSession() {
        const session_id = generateJWTWithExpiry({}, 3600);

        await deleteTestDataQueue.add(
            "deleteTestDataJob",
            {
                session_id,
            },
            { delay: 3600 * 1000 }
        );

        await CobaltService.upsertLinkedAccount(session_id);

        return { session_id };
    }

    public static async deleteSession(session_id: string) {
        await CompanyModel.deleteMany({ session_id });
        await ContactModel.deleteMany({ session_id });
        await DealModel.deleteMany({ session_id });
        await LeadModel.deleteMany({ session_id });

        await axios.delete(
            `${
                Locals.config().service_url.embed_backend
            }/api/v1/linked-acc?account_id=${session_id}&org_id=${
                Locals.config().cobalt.organization_id
            }&environment=production`,
            { headers: { "x-api-key": Locals.config().cobalt.api_key } }
        );

        return { success: true };
    }
}
