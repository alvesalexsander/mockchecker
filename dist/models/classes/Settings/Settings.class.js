'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const Injectable_class_1 = __importDefault(require('../Injetable/Injectable.class'));
class Settings extends Injectable_class_1.default {
    constructor() {
        super();
    }
    importMocks(mocks) {
        const importedMocks = {};
        if (mocks && Object.keys(mocks).length) {
            const imports = Object.entries(mocks);
            for (const pairNamePath of imports) {
                importedMocks[pairNamePath[0]] = this.injectFileFromPath(pairNamePath[1]);
            }
        }
        return importedMocks;
    }
    importDictionary(dictionary) {
        const importedDictionary = {};
        if (dictionary && Object.keys(dictionary).length) {
            const imports = Object.entries(dictionary);
            for (const pairSynonymMeaning of imports) {
                importedDictionary[pairSynonymMeaning[0]] = pairSynonymMeaning[1];
            }
        }
        return importedDictionary;
    }
    importServices(services) {
        const importedExtras = {};
        if (services && Object.keys(services).length) {
            const imports = Object.entries(services);
            for (const service of imports) {
                importedExtras[service[0]] = service[1];
            }
        }
        return importedExtras;
    }
    importExtras(extraModules) {
        const importedExtras = {};
        if (extraModules && Object.keys(extraModules).length) {
            const imports = Object.entries(extraModules);
            for (const extra of imports) {
                importedExtras[extra[0]] = extra[1];
            }
        }
        return importedExtras;
    }
}
exports.default = Settings;
