import IApp from './App.interface';
import SETTINGS from '../../../settings';
import Builder from '../Builder/Builder.class';
import { Interpreter, MockExplorer, ServiceRepository } from '..';
import IRequest from '../Request/Request.interface';

const fs = require('fs');
const path = require('path');

export default class Mockchecker implements IApp {
    [key: string]: any;
    serviceRepository: ServiceRepository;
    interpreter: Interpreter;
    mockExplorer: MockExplorer;

    constructor(
        public create: typeof Builder = Builder,
        // public serviceRepository: ServiceRepository = Builder.ServiceRepository({ settings: SETTINGS.SERVICES }),
        public interpreter: Interpreter = Builder.Interpreter({ settings: SETTINGS.INTERPRETER }),
        public mockExplorer: MockExplorer = Builder.MockExplorer({ settings: SETTINGS.MOCKS }),
    ) {
        this.injectExtras(SETTINGS.EXTRAS);
        this.injectExtraModules(SETTINGS.EXTRAS_MODULES);
    }

    init() {
        this.serviceRepository = this.create.ServiceRepository({ settings: SETTINGS.SERVICES });

        this.injectExtras(SETTINGS.EXTRAS);
        this.injectExtraModules(SETTINGS.EXTRAS_MODULES);
    }

    injectExtras(extras: { [key: string]: any }) {
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

    injectExtraModules(extraModules: { [key: string]: any }) {
        if (extraModules && Object.keys(extraModules).length) {
            for (const module of Object.entries(extraModules)) {
                try {
                    const modulePath =
                        (module[1] as string).slice(-3) === '.js'
                            ? (module[1] as string)
                            : (module[1] as string) + '.js';

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

    query(req: IRequest): any {
        return (
            this.serviceRepository.query(req) ||
            new Error(
                'Mockchecker :: ERROR :: ServiceRepository component not available. Try to restart or reinstall Mockchecker.',
            )
        );
    }
}
