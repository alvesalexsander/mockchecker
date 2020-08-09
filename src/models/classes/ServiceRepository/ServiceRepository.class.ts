import IServiceRepository from './ServiceRepository.interface';
import IBaseService from '../BaseService/BaseService.interface';
import IRequest from '../Request/Request.interface';
import { getServices } from '../../../services';
import SETTINGS from '../../../settings';

import fs from 'fs';
import path from 'path';
import Injectable from '../Injetable/Injectable.class';
export default class ServiceRepository extends Injectable implements IServiceRepository {
    availableServices: { [key: string]: IBaseService } = {};

    constructor(configs: any = {}) {
        super();
        if (configs.settings && Object.keys(configs.settings).length) {
            this.injectServices(configs.settings);
        } else {
            this.availableServices = configs?.settings || this.availableServices;
        }
    }

    query(req: IRequest): any {
        let response: { [key: string]: any } = {};
        if (Object.keys(this.availableServices).length > 0) {
            const relatedServices = Object.keys(this.availableServices).filter((service) =>
                req.requiredServices.includes(service),
            );
            if (relatedServices.length === 1) {
                response = this.availableServices[relatedServices[0]].execute(req);
                return response;
            }
            for (const service of relatedServices) {
                response[service] = this.availableServices[service].execute(req);
            }
        } else {
            throw new Error(
                'ServiceRepository :: ERROR :: No services available. Please, check settings at Mockchecker.',
            );
        }
        return response;
    }

    injectServices(services: { [key: string]: string }): boolean {
        const importedServices: { [key: string]: any } = {};
        if (services && Object.keys(services).length) {
            for (const service of Object.entries(services)) {
                let success = false;
                importedServices[service[0]] = this.injectFileFromPath(service[1]);

                if (
                    importedServices[service[0]]?.constructor?.name === 'Function' &&
                    (importedServices[service[0]]?.name.includes('Service') ||
                        importedServices[service[0]]?.name.includes('service'))
                ) {
                    this.availableServices[service[0]] = new importedServices[service[0]]();
                    success = true;
                }
                if (!SETTINGS.EXTRAS.noWarnings && !success) {
                    console.log(
                        `ServiceRepository :: WARNING :: Could not import service '${
                            service[0]
                        }' at setup.json property as a service. Expected '${path.resolve(
                            service[1],
                        )}' to be a valid JS file path.`,
                    );
                    return false;
                }
            }
        }
        return true;
    }

    isRelativePath(pathString: string): boolean {
        return pathString.includes('./') || pathString.includes('../');
    }
}
