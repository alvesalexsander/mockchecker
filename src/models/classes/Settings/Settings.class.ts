/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
import ISettings from './Settings.interface';
import Injectable from '../Injetable/Injectable.class';

export default class Settings extends Injectable implements ISettings {
    constructor() {
        super();
    }

    importMocks(mocks: { [key: string]: string }): { [key: string]: any } {
        const importedMocks: { [key: string]: string } = {};
        if (mocks && Object.keys(mocks).length) {
            const imports = Object.entries(mocks);
            for (const pairNamePath of imports) {
                importedMocks[pairNamePath[0]] = this.injectFileFromPath(pairNamePath[1]);
            }
        }
        return importedMocks;
    }

    importDictionary(dictionary: { [key: string]: string }): { [key: string]: string } {
        const importedDictionary: { [key: string]: string } = {};
        if (dictionary && Object.keys(dictionary).length) {
            const imports = Object.entries(dictionary);
            for (const pairSynonymMeaning of imports) {
                importedDictionary[pairSynonymMeaning[0]] = pairSynonymMeaning[1];
            }
        }
        return importedDictionary;
    }

    importServices(services: { [key: string]: any }): any {
        const importedExtras: { [key: string]: any } = {};
        if (services && Object.keys(services).length) {
            const imports = Object.entries(services);
            for (const service of imports) {
                importedExtras[service[0]] = service[1];
            }
        }
        return importedExtras;
    }

    importExtras(extraModules: { [key: string]: any }): any {
        const importedExtras: { [key: string]: any } = {};
        if (extraModules && Object.keys(extraModules).length) {
            const imports = Object.entries(extraModules);
            for (const extra of imports) {
                importedExtras[extra[0]] = extra[1];
            }
        }
        return importedExtras;
    }
}
