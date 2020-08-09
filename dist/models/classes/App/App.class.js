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
const fs = require('fs');
const path = require('path');
const settings_1 = __importDefault(require('../../../settings'));
const Builder_class_1 = __importDefault(require('../Builder/Builder.class'));
class Mockchecker {
    constructor(
        create = Builder_class_1.default,
        interpreter = Builder_class_1.default.Interpreter({ settings: settings_1.default.INTERPRETER }),
        mockExplorer = Builder_class_1.default.MockExplorer({ settings: settings_1.default.MOCKS }),
    ) {
        this.create = create;
        this.interpreter = interpreter;
        this.mockExplorer = mockExplorer;
        this.injectExtras(settings_1.default.EXTRAS);
        this.injectExtraModules(settings_1.default.EXTRAS_MODULES);
    }
    init() {
        this.serviceRepository = this.create.ServiceRepository({ settings: settings_1.default.SERVICES });
        this.injectExtras(settings_1.default.EXTRAS);
        this.injectExtraModules(settings_1.default.EXTRAS_MODULES);
    }
    injectExtras(extras) {
        if (extras && Object.keys(extras).length) {
            for (const extra of Object.entries(extras)) {
                try {
                    this[extra[0]] = extra[1];
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
    injectExtraModules(extraModules) {
        if (extraModules && Object.keys(extraModules).length) {
            for (const module of Object.entries(extraModules)) {
                try {
                    const modulePath = module[1].slice(-3) === '.js' ? module[1] : module[1] + '.js';
                    if (fs.existsSync(modulePath)) {
                        this[module[0]] = require(path.resolve(module[1]));
                    } else {
                        if (!this.noWarnings) {
                            console.log(
                                `Mockchecker :: WARNING :: Could not define ${module[0]} property as module. Expected '${module[1]}' to be a valid JS file path. Importing ${module[0]} value as it is. Behavior may not be as expected.`,
                            );
                        }
                        this[module[0]] = module[1];
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
    query(req) {
        return (
            this.serviceRepository.query(req) ||
            new Error(
                'Mockchecker :: ERROR :: ServiceRepository component not available. Try to restart or reinstall Mockchecker.',
            )
        );
    }
}
exports.default = Mockchecker;
