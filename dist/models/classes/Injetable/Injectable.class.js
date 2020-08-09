'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
const fs_1 = __importDefault(require('fs'));
const path_1 = __importDefault(require('path'));
class Injectable {
    constructor() {
        this.appName = 'mockchecker';
    }
    injectNewProp(item, newPropertyName) {
        if (!this[newPropertyName]) {
            this[newPropertyName] = item;
            return true;
        }
        return false;
    }
    injectAtProp(item, propertyName) {
        if (this[propertyName] && this[propertyName]) {
            this[propertyName] = item;
            return true;
        }
        return false;
    }
    injectFileFromPath(pathReceived) {
        let importedItem;
        const notFoundMessage = `Mockchecker @ setup.json :: ERROR :: Unable to resolve path '${path_1.default.resolve(
            this.getBaseFolderPath(),
            pathReceived,
        )}'
                                Please, verify provided file path at setup.json.`;
        const askForFileExtension = `Mockchecker @ setup.json :: ERROR :: Please, inform file extension at the end of the file path '${pathReceived}'. eg: '.js' or '.json' to import it correctly.`;
        if (this.isRelativePath(pathReceived)) {
            if (fs_1.default.existsSync(path_1.default.resolve(this.getBaseFolderPath(), pathReceived))) {
                if (this.isFileJS(pathReceived)) {
                    importedItem = require(path_1.default.resolve(this.getBaseFolderPath(), pathReceived));
                    if (importedItem.default) {
                        importedItem = importedItem.default;
                    }
                } else if (this.isFileJSON(pathReceived)) {
                    importedItem = fs_1.default.readFileSync(
                        path_1.default.resolve(this.getBaseFolderPath(), pathReceived),
                        {
                            encoding: 'utf-8',
                        },
                    );
                    importedItem = JSON.parse(importedItem);
                } else {
                    throw new Error(askForFileExtension);
                }
            } else {
                throw new Error(notFoundMessage);
            }
        } else {
            if (fs_1.default.existsSync(path_1.default.resolve(pathReceived))) {
                if (this.isFileJS(pathReceived)) {
                    importedItem = require(path_1.default.resolve(this.getBaseFolderPath(), pathReceived));
                    if (importedItem.default) {
                        importedItem = importedItem.default;
                    }
                } else if (this.isFileJSON(pathReceived)) {
                    importedItem = fs_1.default.readFileSync(
                        path_1.default.resolve(this.getBaseFolderPath(), pathReceived),
                        {
                            encoding: 'utf-8',
                        },
                    );
                    importedItem = JSON.parse(importedItem);
                } else {
                    throw new Error(askForFileExtension);
                }
            } else {
                throw new Error(notFoundMessage);
            }
        }
        return importedItem;
    }
    isRelativePath(pathString) {
        return pathString.includes('./') || pathString.includes('../');
    }
    getBaseFolderPath() {
        return __dirname.slice(0, __dirname.indexOf(this.appName) + this.appName.length);
    }
    isFileJS(filePath) {
        return filePath.slice(-3).toLowerCase() === '.js' ? true : false;
    }
    isFileJSON(filePath) {
        return filePath.slice(-5).toLowerCase() === '.json' ? true : false;
    }
}
exports.default = Injectable;
// const teste = new Injectable();
// teste.injectFromPath('./dist/services/ConsultQuotaService', 'teste')
// console.log(teste.isFileJSON('asdasdsadsd.json'));
