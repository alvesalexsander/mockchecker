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
const fs = require('fs');
const path = require('path');
const Settings_class_1 = __importDefault(require('./models/classes/Settings/Settings.class'));
const setupFilePath = path.resolve(__dirname, '..', 'setup.json');
const setup = JSON.parse(fs.readFileSync(setupFilePath));
const settingsTeste = new Settings_class_1.default();
settingsTeste.MOCKS = settingsTeste.importMocks(setup.mocks);
settingsTeste.INTERPRETER = {
    meanings: [''],
    dictionary: settingsTeste.importDictionary(setup.dictionary),
};
settingsTeste.EXTRAS_MODULES = settingsTeste.importExtras(setup.extraModules);
settingsTeste.EXTRAS = settingsTeste.importExtras(setup.extras);
settingsTeste.SERVICES = settingsTeste.importServices(setup.services);
exports.default = settingsTeste;
