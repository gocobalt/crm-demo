import CompanyModel from "../models/Company";
import ContactModel from "../models/Contact";
import DealModel from "../models/Deal";
import LeadModel from "../models/Lead";

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

    public static async createCompanies(body_data: any, session_id: string) {
        const { app_type } = body_data;

        let companies_data = [];

        for (const company of body_data.data) {
            const company_exists = await CompanyModel.exists({
                "app_connections.app_type": app_type,
                "app_connections.id": company.id,
                session_id
            });

            if (!company_exists) companies_data.push(company);
        }

        companies_data = companies_data.map((company: any) => {
            const { id, ...data } = company;
            return {
                session_id,
                app_connections: [{ app_type: app_type, id }],
                ...data,
            };
        });

        const companies = await CompanyModel.create(companies_data);

        return companies;
    }

    public static async createCompanyWithConnection(
        data: any,
        app_type: string,
        app_company_id: string,
        session_id: string
    ) {
        const company = await CompanyModel.create({
            ...data,
            session_id,
            app_connections: [{ app_type, id: app_company_id }],
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

    public static async getCompanyWithConnection(id: string, app_type: any, session_id: string) {
        const company = await CompanyModel.findOne({
            "app_connections.id": id,
            "app_connections.app_type": app_type,
            session_id
        });

        return company;
    }

    public static async updateCompany(id: string, payload: any) {
        const company = await CompanyModel.findOneAndUpdate(
            { _id: id },
            payload,
            { runValidators: true, new: true }
        );

        return company;
    }

    public static async updateCompanyConnections(
        company_id: string,
        app_type: string,
        app_company_id: string
    ) {
        const company = await CompanyModel.findOneAndUpdate(
            { _id: company_id },
            {
                $push: {
                    app_connections: {
                        app_type,
                        id: app_company_id,
                    },
                },
            },
            {
                runValidators: true,
                new: true,
            }
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

    public static async createContacts(body_data: any, session_id: string) {
        const { app_type } = body_data;

        let contacts_data = [];

        for (const contact of body_data.data) {
            const contact_exists = await ContactModel.exists({
                "app_connections.app_type": app_type,
                "app_connections.id": contact.id,
                session_id
            });

            if (!contact_exists) contacts_data.push(contact);
        }

        contacts_data = contacts_data.map((contact: any) => {
            const { id, ...data } = contact;
            return {
                session_id,
                app_connections: [{ app_type: app_type, id }],
                ...data,
            };
        });

        const contacts = await ContactModel.create(contacts_data);

        return contacts;
    }

    public static async createContactWithConnection(
        data: any,
        app_type: string,
        app_contact_id: string,
        session_id: string
    ) {
        const contact = await ContactModel.create({
            ...data,
            session_id,
            app_connections: [{ app_type, id: app_contact_id }],
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

    public static async getContact(id: string) {
        const contact = await ContactModel.findById(id);

        return contact;
    }

    public static async getContactWithConnection(id: string, app_type: any, session_id: string) {
        const contact = await ContactModel.findOne({
            "app_connections.id": id,
            "app_connections.app_type": app_type,
            session_id
        });

        return contact;
    }

    public static async updateContact(id: string, payload: any) {
        const contact = await ContactModel.findOneAndUpdate(
            { _id: id },
            payload,
            { runValidators: true, new: true }
        );

        return contact;
    }

    public static async updateContactConnections(
        contact_id: string,
        app_type: string,
        app_contact_id: string
    ) {
        const contact = await ContactModel.findOneAndUpdate(
            { _id: contact_id },
            {
                $push: {
                    app_connections: {
                        app_type,
                        id: app_contact_id,
                    },
                },
            },
            {
                runValidators: true,
                new: true,
            }
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

    public static async createDeals(body_data: any, session_id: string) {
        const { app_type } = body_data;

        let deals_data = [];

        for (const deal of body_data.data) {
            const deal_exists = await DealModel.exists({
                "app_connections.app_type": app_type,
                "app_connections.id": deal.id,
                session_id
            });

            if (!deal_exists) deals_data.push(deal);
        }

        deals_data = deals_data.map((deal: any) => {
            const { id, ...data } = deal;
            return {
                session_id,
                app_connections: [{ app_type: app_type, id }],
                ...data,
            };
        });

        const deals = await DealModel.create(deals_data);

        return deals;
    }

    public static async createDealWithConnection(
        data: any,
        app_type: string,
        app_deal_id: string,
        session_id: string
    ) {
        const deal = await DealModel.create({
            ...data,
            session_id,
            app_connections: [{ app_type, id: app_deal_id }],
        });

        return deal;
    }

    public static async getDeals(session_id: string, filters: any) {
        const { page, limit } = filters;
        const deals = await DealModel.paginate({ session_id }, { page, limit });

        return deals;
    }

    public static async getDealWithConnection(id: string, app_type: any, session_id: string) {
        const deal = await DealModel.findOne({
            "app_connections.id": id,
            "app_connections.app_type": app_type,
            session_id
        });

        return deal;
    }

    public static async updateDeal(id: string, payload: any) {
        const deal = await DealModel.findOneAndUpdate({ _id: id }, payload, {
            runValidators: true,
            new: true,
        });

        return deal;
    }

    public static async updateDealConnections(
        deal_id: string,
        app_type: string,
        app_deal_id: string
    ) {
        const deal = await DealModel.findOneAndUpdate(
            { _id: deal_id },
            {
                $push: {
                    app_connections: {
                        app_type,
                        id: app_deal_id,
                    },
                },
            },
            {
                runValidators: true,
                new: true,
            }
        );

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
        contact_id: string,
        session_id: string
    ) {
        const lead = await LeadModel.create({
            name,
            phone,
            email,
            company,
            contact_id,
            session_id,
        });

        return lead;
    }

    public static async createLeads(body_data: any, session_id: string) {
        const { app_type } = body_data;

        let leads_data = [];

        for (const lead of body_data.data) {
            const lead_exists = await LeadModel.exists({
                "app_connections.app_type": app_type,
                "app_connections.id": lead.id,
                session_id
            });

            if (!lead_exists) leads_data.push(lead);
        }

        leads_data = leads_data.map((lead: any) => {
            const { id, ...data } = lead;
            return {
                session_id,
                app_connections: [{ app_type: app_type, id }],
                ...data,
            };
        });

        const leads = await LeadModel.create(leads_data);

        return leads;
    }

    public static async createLeadWithConnection(
        data: any,
        app_type: string,
        app_lead_id: string,
        session_id: string
    ) {
        const lead = await LeadModel.create({
            ...data,
            session_id,
            app_connections: [{ app_type, id: app_lead_id }],
        });

        return lead;
    }

    public static async getLeads(session_id: string, filters: any) {
        const { page, limit } = filters;
        const leads = await LeadModel.paginate({ session_id }, { page, limit });

        return leads;
    }

    public static async getLeadWithConnection(id: string, app_type: any, session_id: string) {
        const deal = await LeadModel.findOne({
            "app_connections.id": id,
            "app_connections.app_type": app_type,
            session_id
        });

        return deal;
    }

    public static async updateLead(id: string, payload: any) {
        const lead = await LeadModel.findOneAndUpdate({ _id: id }, payload, {
            runValidators: true,
            new: true,
        });

        return lead;
    }

    public static async updateLeadConnections(
        lead_id: string,
        app_type: string,
        app_lead_id: string
    ) {
        const lead = await LeadModel.findOneAndUpdate(
            { _id: lead_id },
            {
                $push: {
                    app_connections: {
                        app_type,
                        id: app_lead_id,
                    },
                },
            },
            {
                runValidators: true,
                new: true,
            }
        );

        return lead;
    }

    public static async deleteLead(id: string) {
        const lead = await LeadModel.findOneAndDelete({ _id: id });

        return lead;
    }
}
