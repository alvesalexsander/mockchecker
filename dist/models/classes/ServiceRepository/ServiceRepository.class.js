'use strict';
/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const path_1 = __importDefault(require('path'));
const settings_1 = __importDefault(require('../../../settings'));
const Injectable_class_1 = __importDefault(require('../Injetable/Injectable.class'));
class ServiceRepository extends Injectable_class_1.default {
    constructor(configs = {}) {
        super();
        this.availableServices = {};
        if (configs.settings && Object.keys(configs.settings).length) {
            this.injectServices(configs.settings);
        } else {
            this.availableServices =
                (configs === null || configs === void 0 ? void 0 : configs.settings) || this.availableServices;
        }
    }
    query(req) {
        let response = {};
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
    injectServices(services) {
        var _a, _b, _c, _d;
        const importedServices = {};
        if (services && Object.keys(services).length) {
            for (const service of Object.entries(services)) {
                let success = false;
                importedServices[service[0]] = this.injectFileFromPath(service[1]);
                if (
                    ((_b = (_a = importedServices[service[0]]) === null || _a === void 0 ? void 0 : _a.constructor) ===
                        null || _b === void 0
                        ? void 0
                        : _b.name) === 'Function' &&
                    (((_c = importedServices[service[0]]) === null || _c === void 0
                        ? void 0
                        : _c.name.includes('Service')) ||
                        ((_d = importedServices[service[0]]) === null || _d === void 0
                            ? void 0
                            : _d.name.includes('service')))
                ) {
                    this.availableServices[service[0]] = new importedServices[service[0]]();
                    success = true;
                }
                if (!settings_1.default.EXTRAS.noWarnings && !success) {
                    console.log(
                        `ServiceRepository :: WARNING :: Could not import service '${
                            service[0]
                        }' at setup.json property as a service. Expected '${path_1.default.resolve(
                            service[1],
                        )}' to be a valid JS file path.`,
                    );
                    return false;
                }
            }
        }
        return true;
    }
    isRelativePath(pathString) {
        return pathString.includes('./') || pathString.includes('../');
    }
}
exports.default = ServiceRepository;
