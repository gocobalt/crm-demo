import { Router } from "express";
import CRMController from "../controllers/crm";
import AuthMiddlewares from "../middlewares/Auth";

const CRMRouter = Router();

/**
 * @route POST /api/v2/crm/company
 * @access Authed
 * @Desc Create company
 */
CRMRouter.post(
    "/company",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.createCompany
);

/**
 * @route POST /api/v2/crm/company/bulk
 * @access Authed
 * @Desc Create companies
 */
CRMRouter.post(
    "/company/bulk",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.createCompanies
);

/**
 * @route GET /api/v2/crm/company/:session_id
 * @access Authed
 * @Desc Get companies
 */
CRMRouter.get(
    "/company",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.getCompanies
);

/**
 * @route PUT /api/v2/crm/company/:company_id
 * @access Authed
 * @Desc Update company
 */
CRMRouter.put(
    "/company/:company_id",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.updateCompany
);

/**
 * @route PUT /api/v2/crm/company
 * @access Authed
 * @Desc Update company connections
 */
CRMRouter.put(
    "/company",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.updateCompanyConnections
);

/**
 * @route DELETE /api/v2/crm/company/:company_id
 * @access Authed
 * @Desc Delete company
 */
CRMRouter.delete(
    "/company/:company_id",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.deleteCompany
);

/**
 * @route DELETE /api/v2/crm/company/:id/:app_type
 * @access Authed
 * @Desc Delete company
 */
CRMRouter.delete(
    "/company/:id/:app_type",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.deleteCompanyInApp
);

/**
 * @route POST /api/v2/crm/company/sync
 * @access Authed
 * @Desc Sync companies
 */
CRMRouter.post(
    "/company/sync",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.syncCompanies
);

/**
 * @route POST /api/v2/crm/contact
 * @access Authed
 * @Desc Create contact
 */
CRMRouter.post(
    "/contact",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.createContact
);

/**
 * @route POST /api/v2/crm/contact/bulk
 * @access Authed
 * @Desc Create contacts
 */
CRMRouter.post(
    "/contact/bulk",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.createContacts
);

/**
 * @route GET /api/v2/crm/contact/:session_id
 * @access Authed
 * @Desc Get contacts
 */
CRMRouter.get(
    "/contact",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.getContacts
);

/**
 * @route PUT /api/v2/crm/contact/:contact_id
 * @access Authed
 * @Desc Update contact
 */
CRMRouter.put(
    "/contact/:contact_id",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.updateContact
);

/**
 * @route PUT /api/v2/crm/contact
 * @access Authed
 * @Desc Update contact connections
 */
CRMRouter.put(
    "/contact",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.updateContactConnections
);

/**
 * @route DELETE /api/v2/crm/contact/:contact_id
 * @access Authed
 * @Desc Delete contact
 */
CRMRouter.delete(
    "/contact/:contact_id",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.deleteContact
);

/**
 * @route DELETE /api/v2/crm/contact/:id/:app_type
 * @access Authed
 * @Desc Delete contact
 */
CRMRouter.delete(
    "/contact/:id/:app_type",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.deleteContactInApp
);

/**
 * @route POST /api/v2/crm/contact/sync
 * @access Authed
 * @Desc Sync contacts
 */
CRMRouter.post(
    "/contact/sync",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.syncContacts
);

/**
 * @route POST /api/v2/crm/deal
 * @access Authed
 * @Desc Create deal
 */
CRMRouter.post(
    "/deal",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.createDeal
);

/**
 * @route POST /api/v2/crm/deal/bulk
 * @access Authed
 * @Desc Create deals
 */
CRMRouter.post(
    "/deal/bulk",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.createDeals
);

/**
 * @route GET /api/v2/crm/deal/:session_id
 * @access Authed
 * @Desc Get deals
 */
CRMRouter.get(
    "/deal",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.getDeals
);

/**
 * @route PUT /api/v2/crm/deal/:deal_id
 * @access Authed
 * @Desc Update deal
 */
CRMRouter.put(
    "/deal/:deal_id",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.updateDeal
);

/**
 * @route PUT /api/v2/crm/deal
 * @access Authed
 * @Desc Update deal connections
 */
CRMRouter.put(
    "/deal",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.updateDealConnections
);

/**
 * @route DELETE /api/v2/crm/deal/:deal_id
 * @access Authed
 * @Desc Delete deal
 */
CRMRouter.delete(
    "/deal/:deal_id",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.deleteDeal
);

/**
 * @route DELETE /api/v2/crm/deal/:id/:app_type
 * @access Authed
 * @Desc Delete deal
 */
CRMRouter.delete(
    "/deal/:id/:app_type",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.deleteDealInApp
);

/**
 * @route POST /api/v2/crm/deal/sync
 * @access Authed
 * @Desc Sync deals
 */
CRMRouter.post(
    "/deal/sync",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.syncDeals
);

/**
 * @route POST /api/v2/crm/lead
 * @access Authed
 * @Desc Create lead
 */
CRMRouter.post(
    "/lead",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.createLead
);

/**
 * @route POST /api/v2/crm/lead/bulk
 * @access Authed
 * @Desc Create leads
 */
CRMRouter.post(
    "/lead/bulk",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.createLeads
);

/**
 * @route GET /api/v2/crm/lead/:session_id
 * @access Authed
 * @Desc Get leads
 */
CRMRouter.get(
    "/lead",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.getLeads
);

/**
 * @route PUT /api/v2/crm/lead/:lead_id
 * @access Authed
 * @Desc Update lead
 */
CRMRouter.put(
    "/lead/:lead_id",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.updateLead
);

/**
 * @route PUT /api/v2/crm/lead
 * @access Authed
 * @Desc Update lead connections
 */
CRMRouter.put(
    "/lead",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.updateLeadConnections
);

/**
 * @route DELETE /api/v2/crm/lead/:lead_id
 * @access Authed
 * @Desc Delete lead
 */
CRMRouter.delete(
    "/lead/:lead_id",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.deleteLead
);

/**
 * @route DELETE /api/v2/crm/lead/:id/:app_type
 * @access Authed
 * @Desc Delete lead
 */
CRMRouter.delete(
    "/lead/:id/:app_type",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.deleteLeadInApp
);

/**
 * @route POST /api/v2/crm/lead/sync
 * @access Authed
 * @Desc Sync leads
 */
CRMRouter.post(
    "/lead/sync",
    [AuthMiddlewares.tokenAuthValidate],
    CRMController.syncLeads
);

export { CRMRouter };
