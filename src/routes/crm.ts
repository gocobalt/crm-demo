import { Router } from "express";
import CRMController from "../controllers/crm";
import AuthMiddlewares from "../middlewares/Auth";

const CRMRouter = Router();

/**
 * @route POST /api/v1/crm/company
 * @access Authed
 * @Desc Create company
 */
CRMRouter.post("/company", [AuthMiddlewares.tokenAuthValidate], CRMController.createCompany);

/**
 * @route GET /api/v1/crm/company/:session_id
 * @access Authed
 * @Desc Get companies
 */
CRMRouter.get("/company", [AuthMiddlewares.tokenAuthValidate], CRMController.getCompanies);

/**
 * @route PUT /api/v1/crm/company/:company_id
 * @access Authed
 * @Desc Update company
 */
CRMRouter.put("/company/:company_id", [AuthMiddlewares.tokenAuthValidate], CRMController.updateCompany);

/**
 * @route DELETE /api/v1/crm/company/:company_id
 * @access Authed
 * @Desc Delete company
 */
CRMRouter.delete("/company/:company_id", [AuthMiddlewares.tokenAuthValidate], CRMController.deleteCompany);

/**
 * @route POST /api/v1/crm/contact
 * @access Authed
 * @Desc Create contact
 */
CRMRouter.post("/contact", [AuthMiddlewares.tokenAuthValidate], CRMController.createContact);

/**
 * @route GET /api/v1/crm/contact/:session_id
 * @access Authed
 * @Desc Get contacts
 */
CRMRouter.get("/contact", [AuthMiddlewares.tokenAuthValidate], CRMController.getContacts);

/**
 * @route PUT /api/v1/crm/contact/:contact_id
 * @access Authed
 * @Desc Update contact
 */
CRMRouter.put("/contact/:contact_id", [AuthMiddlewares.tokenAuthValidate], CRMController.updateContact);

/**
 * @route DELETE /api/v1/crm/contact/:contact_id
 * @access Authed
 * @Desc Delete contact
 */
CRMRouter.delete("/contact/:contact_id", [AuthMiddlewares.tokenAuthValidate], CRMController.deleteContact);

/**
 * @route POST /api/v1/crm/deal
 * @access Authed
 * @Desc Create deal
 */
CRMRouter.post("/deal", [AuthMiddlewares.tokenAuthValidate], CRMController.createDeal);

/**
 * @route GET /api/v1/crm/deal/:session_id
 * @access Authed
 * @Desc Get deals
 */
CRMRouter.get("/deal", [AuthMiddlewares.tokenAuthValidate], CRMController.getDeals);

/**
 * @route PUT /api/v1/crm/deal/:deal_id
 * @access Authed
 * @Desc Update deal
 */
CRMRouter.put("/deal/:deal_id", [AuthMiddlewares.tokenAuthValidate], CRMController.updateDeal);

/**
 * @route DELETE /api/v1/crm/deal/:deal_id
 * @access Authed
 * @Desc Delete deal
 */
CRMRouter.delete("/deal/:deal_id", [AuthMiddlewares.tokenAuthValidate], CRMController.deleteDeal);

/**
 * @route POST /api/v1/crm/lead
 * @access Authed
 * @Desc Create lead
 */
CRMRouter.post("/lead", [AuthMiddlewares.tokenAuthValidate], CRMController.createLead);

/**
 * @route GET /api/v1/crm/lead/:session_id
 * @access Authed
 * @Desc Get leads
 */
CRMRouter.get("/lead", [AuthMiddlewares.tokenAuthValidate], CRMController.getLeads);

/**
 * @route PUT /api/v1/crm/lead/:lead_id
 * @access Authed
 * @Desc Update lead
 */
CRMRouter.put("/lead/:lead_id", [AuthMiddlewares.tokenAuthValidate], CRMController.updateLead);

/**
 * @route DELETE /api/v1/crm/lead/:lead_id
 * @access Authed
 * @Desc Delete lead
 */
CRMRouter.delete("/lead/:lead_id", [AuthMiddlewares.tokenAuthValidate], CRMController.deleteLead);

export { CRMRouter };
