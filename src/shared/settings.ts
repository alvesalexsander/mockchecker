const fs = require('fs');
const path = require('path');

const setupFilePath = path.resolve(__dirname, '..', '..', 'setup.json');

const setup = JSON.parse(fs.readFileSync(setupFilePath));

const SETTINGS = {
    MOCKS: importMocks(setup.mocks),
    INTERPRETER: {
        meanings: [''],
        dictionary: importDictionary(setup.dictionary),
    },
    EXTRAS_MODULES: importExtras(setup.extraModules),
    EXTRAS: importExtras(setup.extras),
    SERVICES: importServices(setup.services),
};

function importMocks(mocks: { [key: string]: string }): { [key: string]: any } {
    const importedMocks: { [key: string]: string } = {};
    if (mocks && Object.keys(mocks).length) {
        const imports = Object.entries(mocks);
        for (const pairNamePath of imports) {
            importedMocks[pairNamePath[0]] = require(pairNamePath[1]);
        }
    }
    return importedMocks;
}

function importDictionary(dictionary: { [key: string]: string }): { [key: string]: string } {
    const importedDictionary: { [key: string]: string } = {};
    if (dictionary && Object.keys(dictionary).length) {
        const imports = Object.entries(dictionary);
        for (const pairSynonymMeaning of imports) {
            importedDictionary[pairSynonymMeaning[0]] = pairSynonymMeaning[1];
        }
    }
    return importedDictionary;
}

function importServices(services: { [key: string]: any }): any {
    const importedExtras: { [key: string]: any } = {};
    if (services && Object.keys(services).length) {
        const imports = Object.entries(services);
        for (const service of imports) {
            importedExtras[service[0]] = service[1];
        }
    }
    return importedExtras;
}

function importExtras(extraModules: { [key: string]: any }): any {
    const importedExtras: { [key: string]: any } = {};
    if (extraModules && Object.keys(extraModules).length) {
        const imports = Object.entries(extraModules);
        for (const extra of imports) {
            importedExtras[extra[0]] = extra[1];
        }
    }
    return importedExtras;
}

export default SETTINGS;
