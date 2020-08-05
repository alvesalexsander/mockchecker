import fs from 'fs';
import path from 'path';

import IInjectable from './Injectable.interface';

export default abstract class Injectable implements IInjectable {
    [key: string]: any;

    injectNewProp(item: any, newPropertyName: string): boolean {
        if (!this[newPropertyName]) {
            this[newPropertyName] = item;
            return true;
        }

        return false;
    }

    injectAtProp(item: any, propertyName: string): boolean {
        if (this[propertyName] && (this[propertyName] as IInjectable)) {
            this[propertyName] = item;
            return true;
        }

        return false;
    }

    injectFileFromPath(pathReceived: string): any {
        let importedItem: any;

        const notFoundMessage = `Mockchecker @ setup.json :: ERROR :: Unable to resolve path '${path.resolve(
            this.getBaseFolderPath(),
            pathReceived,
        )}'
                                Please, verify provided file path at setup.json.`;
        const askForFileExtension = `Mockchecker @ setup.json :: ERROR :: Please, inform file extension at the end of the file path '${pathReceived}'. eg: '.js' or '.json' to import it correctly.`;

        if (this.isRelativePath(pathReceived)) {
            if (fs.existsSync(path.resolve(this.getBaseFolderPath(), pathReceived))) {
                if (this.isFileJS(pathReceived)) {
                    importedItem = require(path.resolve(this.getBaseFolderPath(), pathReceived));
                    if (importedItem.default) {
                        importedItem = importedItem.default;
                    }
                } else if (this.isFileJSON(pathReceived)) {
                    importedItem = fs.readFileSync(path.resolve(this.getBaseFolderPath(), pathReceived), {
                        encoding: 'utf-8',
                    });
                    importedItem = JSON.parse(importedItem);
                } else {
                    throw new Error(askForFileExtension);
                }
            } else {
                throw new Error(notFoundMessage);
            }
        } else {
            if (fs.existsSync(path.resolve(pathReceived))) {
                if (this.isFileJS(pathReceived)) {
                    importedItem = require(path.resolve(this.getBaseFolderPath(), pathReceived));
                    if (importedItem.default) {
                        importedItem = importedItem.default;
                    }
                } else if (this.isFileJSON(pathReceived)) {
                    importedItem = fs.readFileSync(path.resolve(this.getBaseFolderPath(), pathReceived), {
                        encoding: 'utf-8',
                    });
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

    isRelativePath(pathString: string): boolean {
        return pathString.includes('./') || pathString.includes('../');
    }

    getBaseFolderPath(): string {
        return __dirname.slice(0, __dirname.indexOf('mockchecker\\') + 'mockchecker\\'.length);
    }

    isFileJS(filePath: string): boolean {
        return filePath.slice(-3).toLowerCase() === '.js' ? true : false;
    }

    isFileJSON(filePath: string): boolean {
        return filePath.slice(-5).toLowerCase() === '.json' ? true : false;
    }
}

// const teste = new Injectable();

// teste.injectFromPath('./dist/services/ConsultQuotaService', 'teste')

// console.log(teste.isFileJSON('asdasdsadsd.json'));
