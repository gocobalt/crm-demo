import { Request, Response } from "express";
import ErrorHandler from "../providers/Error";
import CRMService from "../services/crm";
import CobaltService from "../services/cobalt";
import Locals from "../providers/Locals";

export default class CRMController {
    public static async createCompany(req: Request, res: Response) {
        try {
            const { name, industry, website, employees } = req.body;

            const response = await CRMService.createCompany(
                name,
                industry,
                website,
                employees,
                (req as any).token
            );

            await CobaltService.triggerEvent(
                (req as any).token,
                "Add Company",
                Locals.config().cobalt.app_id,
                {
                    id: response._id,
                    name,
                    industry,
                    website,
                    employees,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async getCompanies(req: Request, res: Response) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const response = await CRMService.getCompanies((req as any).token, {
                page,
                limit,
            });

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async updateCompany(req: Request, res: Response) {
        try {
            const company_id = req.params.company_id;

            const response = await CRMService.updateCompany(
                company_id,
                req.body
            );

            await CobaltService.triggerEvent(
                (req as any).token,
                "Sync Company",
                Locals.config().cobalt.app_id,
                {
                    id: company_id,
                    ...req.body,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteCompany(req: Request, res: Response) {
        try {
            const company_id = req.params.company_id;

            const response = await CRMService.deleteCompany(company_id);

            await CobaltService.triggerEvent(
                (req as any).token,
                "Delete Company",
                Locals.config().cobalt.app_id,
                {
                    id: company_id,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async createContact(req: Request, res: Response) {
        try {
            const { first_name, last_name, email, phone } = req.body;

            const response = await CRMService.createContact(
                first_name,
                last_name,
                email,
                phone,
                (req as any).token
            );

            await CobaltService.triggerEvent(
                (req as any).token,
                "Add Contact",
                Locals.config().cobalt.app_id,
                {
                    id: response._id,
                    first_name,
                    last_name,
                    email,
                    phone,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async getContacts(req: Request, res: Response) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const response = await CRMService.getContacts((req as any).token, {
                page,
                limit,
            });

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async updateContact(req: Request, res: Response) {
        try {
            const contact_id = req.params.contact_id;

            const response = await CRMService.updateContact(
                contact_id,
                req.body
            );

            await CobaltService.triggerEvent(
                (req as any).token,
                "Sync Contact",
                Locals.config().cobalt.app_id,
                {
                    id: contact_id,
                    ...req.body,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteContact(req: Request, res: Response) {
        try {
            const contact_id = req.params.contact_id;

            const response = await CRMService.deleteContact(contact_id);

            await CobaltService.triggerEvent(
                (req as any).token,
                "Delete Contact",
                Locals.config().cobalt.app_id,
                {
                    id: contact_id,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async createDeal(req: Request, res: Response) {
        try {
            const { name, amount, closing_date, description } = req.body;

            const response = await CRMService.createDeal(
                name,
                amount,
                closing_date,
                description,
                (req as any).token
            );

            await CobaltService.triggerEvent(
                (req as any).token,
                "Add Deal",
                Locals.config().cobalt.app_id,
                {
                    id: response._id,
                    name,
                    amount,
                    closing_date,
                    description,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async getDeals(req: Request, res: Response) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const response = await CRMService.getDeals((req as any).token, {
                page,
                limit,
            });

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async updateDeal(req: Request, res: Response) {
        try {
            const deal_id = req.params.deal_id;

            const response = await CRMService.updateDeal(deal_id, req.body);

            await CobaltService.triggerEvent(
                (req as any).token,
                "Sync Deal",
                Locals.config().cobalt.app_id,
                {
                    id: deal_id,
                    ...req.body,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteDeal(req: Request, res: Response) {
        try {
            const deal_id = req.params.deal_id;

            const response = await CRMService.deleteDeal(deal_id);

            await CobaltService.triggerEvent(
                (req as any).token,
                "Delete Deal",
                Locals.config().cobalt.app_id,
                {
                    id: deal_id,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async createLead(req: Request, res: Response) {
        try {
            const { name, phone, email, company } = req.body;

            const response = await CRMService.createLead(
                name,
                phone,
                email,
                company,
                (req as any).token
            );

            await CobaltService.triggerEvent(
                (req as any).token,
                "Add Lead",
                Locals.config().cobalt.app_id,
                {
                    id: response._id,
                    name,
                    phone,
                    email,
                    company,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async getLeads(req: Request, res: Response) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const response = await CRMService.getLeads((req as any).token, {
                page,
                limit,
            });

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async updateLead(req: Request, res: Response) {
        try {
            const lead_id = req.params.lead_id;

            const response = await CRMService.updateLead(lead_id, req.body);

            await CobaltService.triggerEvent(
                (req as any).token,
                "Sync Lead",
                Locals.config().cobalt.app_id,
                {
                    id: lead_id,
                    ...req.body,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteLead(req: Request, res: Response) {
        try {
            const lead_id = req.params.lead_id;

            const response = await CRMService.deleteLead(lead_id);

            await CobaltService.triggerEvent(
                (req as any).token,
                "Delete Lead",
                Locals.config().cobalt.app_id,
                {
                    id: lead_id,
                }
            );

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }
}
