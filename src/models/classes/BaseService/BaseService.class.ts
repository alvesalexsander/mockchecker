import { mockchecker } from '../../../index';
import IBaseService from './BaseService.interface';
import { Request } from '../index';
import IMockExplorer from '../MockExplorer/MockExplorer.interface';

export default abstract class BaseService implements IBaseService {
    [key: string]: any;
    serviceName: string;
    serviceDescription: string;
    dataSource: string;
    dataStorage: { [key: string]: any };

    constructor(configs: any = {}, private mockExplorer: IMockExplorer = mockchecker.mockExplorer) {
        this.serviceName = this.serviceName || configs?.name;
        this.serviceDescription = this.serviceDescription || configs?.description;
        this.dataSource = this.dataSource || configs?.source;
    }

    execute(req: Request): any {
        if (req?.method && this[req.method]) {
            return this[req.method](req);
        } else if (!req.method && this.default) {
            return this.default(req);
        } else if (!req.method && this.read) {
            return this.read(req);
        } else {
            throw new Error(
                `${this.serviceName} :: ERROR :: Handle '${req.method}' from Request is not valid or not implemented.`,
            );
        }
    }

    read(req: Request): { [key: string]: any } {
        console.error(
            `${this.serviceName} :: ERROR :: Handle 'read' not implemented at ${this.serviceName}. To use the 'default' handle you may omit 'method' at Request.`,
        );
        return {};
    }

    write(req: Request): { [key: string]: any } {
        console.error(
            `${this.serviceName} :: ERROR :: Handle 'write' not implemented at ${this.serviceName}. To use the 'default' handle you may omit 'method' at Request.`,
        );
        return {};
    }

    update(req: Request): { [key: string]: any } {
        console.error(
            `${this.serviceName} :: ERROR :: Handle 'update' not implemented at ${this.serviceName}. To use the 'default' handle you may omit 'method' at Request.`,
        );
        return {};
    }

    requestData(req: Request): any {
        if (this.dataSource) {
            if (this.mockExplorer.hasMock(this.dataSource)) {
                // return this.mockExplorer.find(req.params.dataIdentifier, this.dataSource);
                return this.mockExplorer.getMock(this.dataSource);
            } else {
                throw new Error(`BaseService :: ERROR :: ${this.dataSource} is not a valid mockName at MockExplorer.`);
            }
        }
    }

    name(serviceName: string): this {
        this.serviceName = serviceName;
        return this;
    }

    description(serviceDescription: string): this {
        this.serviceDescription = serviceDescription;
        return this;
    }

    source(dataSource: any): this {
        this.dataSource = dataSource;
        return this;
    }
}
