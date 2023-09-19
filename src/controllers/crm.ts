import { Request, Response } from "express";
import ErrorHandler from "../providers/Error";
import CRMService from "../services/crm";
import CobaltService from "../services/cobalt";

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

    public static async createCompanies(req: Request, res: Response) {
        try {
            const response = await CRMService.createCompanies(
                req.body,
                (req as any).token
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

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async updateCompanyConnections(req: Request, res: Response) {
        try {
            const { company_id, app_type, app_company_id, data } = req.body;

            if (!app_type || !app_company_id || (!company_id && !data)) {
                throw new Error("Invalid data format");
            }

            if (company_id) {
                const response = await CRMService.updateCompanyConnections(
                    company_id,
                    app_type,
                    app_company_id
                );

                return res.status(200).json(response);
            } else {
                const response = await CRMService.createCompanyWithConnection(
                    data,
                    app_type,
                    app_company_id,
                    (req as any).token
                );

                return res.status(200).json(response);
            }
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteCompany(req: Request, res: Response) {
        try {
            const company_id = req.params.company_id;

            const response = await CRMService.deleteCompany(company_id);

            if (response) {
                for (let connection of response.app_connections) {
                    await CobaltService.triggerEvent(
                        (req as any).token,
                        "Delete Company",
                        {
                            id: company_id,
                            app_company_id: connection.id,
                        },
                        (connection as any).app_type
                    );
                }
            }

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteCompanyInApp(req: Request, res: Response) {
        try {
            const { id, app_type } = req.params;

            const company: any = await CRMService.getCompanyWithConnection(id, app_type, (req as any).token);
            
            const response = await CRMService.deleteCompany(company._id);

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async syncCompanies(req: Request, res: Response) {
        try {
            await CobaltService.triggerEvent(
                (req as any).token,
                "Sync Company"
            );

            return res.status(200).json({ success: true });
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

    public static async createContacts(req: Request, res: Response) {
        try {
            const response = await CRMService.createContacts(
                req.body,
                (req as any).token
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

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async updateContactConnections(req: Request, res: Response) {
        try {
            const { contact_id, app_type, app_contact_id, data } = req.body;

            if (!app_type || !app_contact_id || (!contact_id && !data)) {
                throw new Error("Invalid data format");
            }

            if (contact_id) {
                const response = await CRMService.updateContactConnections(
                    contact_id,
                    app_type,
                    app_contact_id
                );

                return res.status(200).json(response);
            } else {
                const response = await CRMService.createContactWithConnection(
                    data,
                    app_type,
                    app_contact_id,
                    (req as any).token
                );

                return res.status(200).json(response);
            }
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteContact(req: Request, res: Response) {
        try {
            const contact_id = req.params.contact_id;

            const response = await CRMService.deleteContact(contact_id);

            if (response) {
                for (let connection of response.app_connections) {
                    await CobaltService.triggerEvent(
                        (req as any).token,
                        "Delete Contact",
                        {
                            id: contact_id,
                            app_contact_id: connection.id,
                        },
                        (connection as any).app_type
                    );
                }
            }

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteContactInApp(req: Request, res: Response) {
        try {
            const { id, app_type } = req.params;

            const contact: any = await CRMService.getContactWithConnection(id, app_type, (req as any).token);
            
            const response = await CRMService.deleteContact(contact._id);

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async syncContacts(req: Request, res: Response) {
        try {
            await CobaltService.triggerEvent(
                (req as any).token,
                "Sync Contact"
            );

            return res.status(200).json({ success: true });
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

            await CobaltService.triggerEvent((req as any).token, "Add Deal", {
                id: response._id,
                name,
                amount,
                closing_date,
                description,
            });

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async createDeals(req: Request, res: Response) {
        try {
            const response = await CRMService.createDeals(
                req.body,
                (req as any).token
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

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async updateDealConnections(req: Request, res: Response) {
        try {
            const { deal_id, app_type, app_deal_id, data } = req.body;

            if (!app_type || !app_deal_id || (!deal_id && !data)) {
                throw new Error("Invalid data format");
            }

            if (deal_id) {
                const response = await CRMService.updateDealConnections(
                    deal_id,
                    app_type,
                    app_deal_id
                );

                return res.status(200).json(response);
            } else {
                const response = await CRMService.createDealWithConnection(
                    data,
                    app_type,
                    app_deal_id,
                    (req as any).token
                );

                return res.status(200).json(response);
            }
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteDeal(req: Request, res: Response) {
        try {
            const deal_id = req.params.deal_id;

            const response = await CRMService.deleteDeal(deal_id);

            if (response) {
                for (let connection of response.app_connections) {
                    await CobaltService.triggerEvent(
                        (req as any).token,
                        "Delete Deal",
                        {
                            id: deal_id,
                            app_deal_id: connection.id,
                        },
                        (connection as any).app_type
                    );
                }
            }

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteDealInApp(req: Request, res: Response) {
        try {
            const { id, app_type } = req.params;

            const deal: any = await CRMService.getDealWithConnection(id, app_type, (req as any).token);
            
            const response = await CRMService.deleteDeal(deal._id);

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async syncDeals(req: Request, res: Response) {
        try {
            await CobaltService.triggerEvent((req as any).token, "Sync Deal");

            return res.status(200).json({ success: true });
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async createLead(req: Request, res: Response) {
        try {
            const { name, phone, email, company, contact_id } = req.body;

            const response = await CRMService.createLead(
                name,
                phone,
                email,
                company,
                contact_id,
                (req as any).token
            );

            const contact = await CRMService.getContact(contact_id);

            contact?.app_connections.forEach(async (connection) => {
                await CobaltService.triggerEvent(
                    (req as any).token,
                    "Add Lead",
                    {
                        id: response._id,
                        name,
                        phone,
                        email,
                        company,
                        contact_id: connection.id,
                    },
                    connection.app_type
                );
            });

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async createLeads(req: Request, res: Response) {
        try {
            const response = await CRMService.createLeads(
                req.body,
                (req as any).token
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

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async updateLeadConnections(req: Request, res: Response) {
        try {
            const { lead_id, app_type, app_lead_id, data } = req.body;

            if (!app_type || !app_lead_id || (!lead_id && !data)) {
                throw new Error("Invalid data format");
            }

            if (lead_id) {
                const response = await CRMService.updateLeadConnections(
                    lead_id,
                    app_type,
                    app_lead_id
                );

                return res.status(200).json(response);
            } else {
                const response = await CRMService.createLeadWithConnection(
                    data,
                    app_type,
                    app_lead_id,
                    (req as any).token
                );

                return res.status(200).json(response);
            }
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteLead(req: Request, res: Response) {
        try {
            const lead_id = req.params.lead_id;

            const response = await CRMService.deleteLead(lead_id);

            if (response) {
                for (let connection of response.app_connections) {
                    await CobaltService.triggerEvent(
                        (req as any).token,
                        "Delete Lead",
                        {
                            id: lead_id,
                            app_lead_id: connection.id,
                        },
                        (connection as any).app_type
                    );
                }
            }

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async deleteLeadInApp(req: Request, res: Response) {
        try {
            const { id, app_type } = req.params;

            const lead: any = await CRMService.getLeadWithConnection(id, app_type, (req as any).token);
            
            const response = await CRMService.deleteLead(lead._id);

            return res.status(200).json(response);
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }

    public static async syncLeads(req: Request, res: Response) {
        try {
            await CobaltService.triggerEvent((req as any).token, "Sync Lead");

            return res.status(200).json({ success: true });
        } catch (err) {
            ErrorHandler.APIErrorHandler(err, res);
        }
    }
}
