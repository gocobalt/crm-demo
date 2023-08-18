import Cobalt from "@cobaltio/cobalt";
import Locals from "../providers/Locals";

function getClient() {
    const Client: Cobalt = new Cobalt({
        apiKey: Locals.config().cobalt.api_key as string,
    });

    return Client;
}

export default class CobaltService {
    public static async upsertLinkedAccount(linked_account_id: string) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(
                    getClient().upsertLinkedAccount({
                        linked_account_id: linked_account_id,
                    })
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    public static async getTokenForLinkedAccount(linked_account_id: string) {
        return new Promise((resolve, reject) => {
            try {
                resolve(
                    getClient().getTokenForLinkedAccount({
                        linked_account_id,
                    })
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    public static async getApplications(linked_account_id: string) {
        return new Promise((resolve, reject) => {
            try {
                resolve(getClient().getApplications(linked_account_id));
            } catch (error) {
                reject(error);
            }
        });
    }

    public static async getApplicationBySlug(
        linked_account_id: string,
        slug: string
    ) {
        return new Promise((resolve, reject) => {
            try {
                resolve(
                    getClient().getApplicationBySlug(linked_account_id, slug)
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    public static async triggerEvent(
        linked_account_id: string,
        event: string,
        slug?: string,
        payload?: Record<string, any>
    ) {
        return new Promise((resolve, reject) => {
            try {
                resolve(
                    getClient().event({
                        linked_account_id,
                        event,
                        slug,
                        payload,
                    })
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    public static async findOrCreateConfig(
        linked_account_id: string,
        slug: string,
        config_id?: string
    ) {
        return new Promise((resolve, reject) => {
            try {
                resolve(
                    getClient().config({
                        linked_account_id,
                        slug,
                        config_id,
                        labels: {
                            "Company Fields": [
                                {
                                    name: "Name",
                                    value: "name",
                                },
                                {
                                    name: "Industry",
                                    value: "industry",
                                },
                                {
                                    name: "Website",
                                    value: "website",
                                },
                                {
                                    name: "Employees",
                                    value: "employees",
                                },
                            ],
                            "Contact Fields": [
                                {
                                    name: "First Name",
                                    value: "first_name",
                                },
                                {
                                    name: "Last Name",
                                    value: "last_name",
                                },
                                {
                                    name: "Email",
                                    value: "email",
                                },
                                {
                                    name: "Phone",
                                    value: "phone",
                                },
                            ],
                            "Deal Fields": [
                                {
                                    name: "Name",
                                    value: "name",
                                },
                                {
                                    name: "Amount",
                                    value: "amount",
                                },
                                {
                                    name: "Closing Date",
                                    value: "closing_date",
                                },
                                {
                                    name: "Description",
                                    value: "description",
                                },
                            ],
                            "Lead Fields": [
                                {
                                    name: "Name",
                                    value: "name",
                                },
                                {
                                    name: "Phone",
                                    value: "phone",
                                },
                                {
                                    name: "Email",
                                    value: "email",
                                },
                                {
                                    name: "Company",
                                    value: "company",
                                },
                            ],
                        },
                    })
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    public static async updateConfig(
        linked_account_id: string,
        slug: string,
        fields: any,
        workflows: any,
        config_id?: string
    ) {
        return new Promise((resolve, reject) => {
            try {
                resolve(
                    getClient().updateConfig({
                        linked_account_id,
                        slug,
                        config_id,
                        fields,
                        workflows,
                    })
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    public static async deleteConfig(
        linked_account_id: string,
        slug: string
    ) {
        return new Promise((resolve, reject) => {
            try {
                resolve(
                    getClient().deleteConfig({
                        linked_account_id,
                        slug
                    })
                );
            } catch (error) {
                reject(error);
            }
        });
    }
}
