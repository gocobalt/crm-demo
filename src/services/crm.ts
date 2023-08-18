import CompanyModel from "../models/crm/Company";
import ContactModel from "../models/crm/Contact";
import DealModel from "../models/crm/Deal";
import LeadModel from "../models/crm/Lead";

export default class CRMService {
    public static async createCompany(
        name: string,
        industry: string,
        website: string,
        employees: number,
        session_id: string
    ) {
        const company = await CompanyModel.create({
            name,
            industry,
            website,
            employees,
            session_id,
        });

        return company;
    }

    public static async getCompanies(session_id: string, filters: any) {
        const { page, limit } = filters;
        const companies = await CompanyModel.paginate(
            { session_id },
            { page, limit }
        );

        return companies;
    }

    public static async updateCompany(id: string, payload: any) {
        const company = await CompanyModel.findOneAndUpdate(
            { _id: id },
            payload,
            { runValidators: true, new: true }
        );

        return company;
    }

    public static async deleteCompany(id: string) {
        const company = await CompanyModel.findOneAndDelete({ _id: id });

        return company;
    }

    public static async createContact(
        first_name: string,
        last_name: string,
        email: string,
        phone: number,
        session_id: string
    ) {
        const contact = await ContactModel.create({
            first_name,
            last_name,
            email,
            phone,
            session_id,
        });

        return contact;
    }

    public static async getContacts(session_id: string, filters: any) {
        const { page, limit } = filters;
        const contacts = await ContactModel.paginate(
            { session_id },
            { page, limit }
        );

        return contacts;
    }

    public static async updateContact(id: string, payload: any) {
        const contact = await ContactModel.findOneAndUpdate(
            { _id: id },
            payload,
            { runValidators: true, new: true }
        );

        return contact;
    }

    public static async deleteContact(id: string) {
        const contact = await ContactModel.findOneAndDelete({ _id: id });

        return contact;
    }

    public static async createDeal(
        name: string,
        amount: number,
        closing_date: string,
        description: string,
        session_id: string
    ) {
        const deal = await DealModel.create({
            name,
            amount,
            closing_date,
            description,
            session_id,
        });

        return deal;
    }

    public static async getDeals(session_id: string, filters: any) {
        const { page, limit } = filters;
        const deals = await DealModel.paginate({ session_id }, { page, limit });

        return deals;
    }

    public static async updateDeal(id: string, payload: any) {
        const deal = await DealModel.findOneAndUpdate({ _id: id }, payload, {
            runValidators: true,
            new: true,
        });

        return deal;
    }

    public static async deleteDeal(id: string) {
        const deal = await DealModel.findOneAndDelete({ _id: id });

        return deal;
    }

    public static async createLead(
        name: string,
        phone: string,
        email: string,
        company: string,
        session_id: string
    ) {
        const lead = await LeadModel.create({
            name,
            phone,
            email,
            company,
            session_id,
        });

        return lead;
    }

    public static async getLeads(session_id: string, filters: any) {
        const { page, limit } = filters;
        const leads = await LeadModel.paginate({ session_id }, { page, limit });

        return leads;
    }

    public static async updateLead(id: string, payload: any) {
        const lead = await LeadModel.findOneAndUpdate({ _id: id }, payload, {
            runValidators: true,
            new: true,
        });

        return lead;
    }

    public static async deleteLead(id: string) {
        const lead = await LeadModel.findOneAndDelete({ _id: id });

        return lead;
    }
}
