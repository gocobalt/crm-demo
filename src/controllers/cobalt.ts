import { Request, Response } from "express";
import ErrorHandler from "../providers/Error";
import CobaltService from "../services/cobalt";

export default class CobaltController {
    public static async getTokenForLinkedAccount(req: Request, res: Response) {
        try {
            const response: any = await CobaltService.getTokenForLinkedAccount(
                (req as any).token
            );
            return res.status(200).send(response);
        } catch (e) {
            console.log("error");
            ErrorHandler.APIErrorHandler(e, res);
        }
    }

    public static async getApplications(req: Request, res: Response) {
        try {
            const response: any = await CobaltService.getApplications(
                (req as any).token
            );
            return res.status(200).send(response);
        } catch (e) {
            console.log("error");
            ErrorHandler.APIErrorHandler(e, res);
        }
    }

    public static async getApplicationBySlug(req: Request, res: Response) {
        try {
            const { slug } = req.params;
            const response: any = await CobaltService.getApplicationBySlug(
                (req as any).token,
                slug
            );
            return res.status(200).send(response);
        } catch (e) {
            console.log("error");
            ErrorHandler.APIErrorHandler(e, res);
        }
    }

    public static async findOrCreateConfig(req: Request, res: Response) {
        try {
            const { slug, config_id } = req.body;
            const response: any = await CobaltService.findOrCreateConfig(
                (req as any).token,
                slug,
                config_id
            );
            return res.status(200).send(response);
        } catch (e) {
            console.log("error");
            ErrorHandler.APIErrorHandler(e, res);
        }
    }

    public static async updateConfig(req: Request, res: Response) {
        try {
            const { slug, fields, workflows, config_id } = req.body;
            const response: any = await CobaltService.updateConfig(
                (req as any).token,
                slug,
                fields,
                workflows,
                config_id
            );
            return res.status(200).send(response);
        } catch (e) {
            console.log("error");
            ErrorHandler.APIErrorHandler(e, res);
        }
    }

    public static async deleteConfig(req: Request, res: Response) {
        try {
            const { slug } = req.params;
            const response: any = await CobaltService.deleteConfig(
                (req as any).token,
                slug
            );
            return res.status(200).send(response);
        } catch (e) {
            console.log("error");
            ErrorHandler.APIErrorHandler(e, res);
        }
    }
}
