'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
const index_1 = require('../../../index');
class BaseService {
    constructor(configs = {}, mockExplorer = index_1.mockchecker.mockExplorer) {
        this.mockExplorer = mockExplorer;
        this.serviceName = this.serviceName || (configs === null || configs === void 0 ? void 0 : configs.name);
        this.serviceDescription =
            this.serviceDescription || (configs === null || configs === void 0 ? void 0 : configs.description);
        this.dataSource = this.dataSource || (configs === null || configs === void 0 ? void 0 : configs.source);
    }
    execute(req) {
        if ((req === null || req === void 0 ? void 0 : req.method) && this[req.method]) {
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
    read(req) {
        console.error(
            `${this.serviceName} :: ERROR :: Handle 'read' not implemented at ${this.serviceName}. To use the 'default' handle you may omit 'method' at Request.`,
        );
        return {};
    }
    write(req) {
        console.error(
            `${this.serviceName} :: ERROR :: Handle 'write' not implemented at ${this.serviceName}. To use the 'default' handle you may omit 'method' at Request.`,
        );
        return {};
    }
    update(req) {
        console.error(
            `${this.serviceName} :: ERROR :: Handle 'update' not implemented at ${this.serviceName}. To use the 'default' handle you may omit 'method' at Request.`,
        );
        return {};
    }
    requestData(req) {
        if (this.dataSource) {
            if (this.mockExplorer.hasMock(this.dataSource)) {
                return this.mockExplorer.find(req, this.dataSource);
                // return this.mockExplorer.getMock(this.dataSource);
            } else {
                throw new Error(`BaseService :: ERROR :: ${this.dataSource} is not a valid mockName at MockExplorer.`);
            }
        }
    }
    name(serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    description(serviceDescription) {
        this.serviceDescription = serviceDescription;
        return this;
    }
    source(dataSource) {
        this.dataSource = dataSource;
        return this;
    }
}
exports.default = BaseService;
