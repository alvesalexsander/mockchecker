const fs = require('fs');
const path = require('path');

import Settings from './models/classes/Settings/Settings.class';

const setupFilePath = path.resolve(__dirname, '..', 'setup.json');

const setup = JSON.parse(fs.readFileSync(setupFilePath));

const settingsTeste = new Settings();

settingsTeste.MOCKS = settingsTeste.importMocks(setup.mocks);
settingsTeste.INTERPRETER = {
    meanings: [''],
    dictionary: settingsTeste.importDictionary(setup.dictionary),
};
settingsTeste.EXTRAS_MODULES = settingsTeste.importExtras(setup.extraModules);
settingsTeste.EXTRAS = settingsTeste.importExtras(setup.extras);
settingsTeste.SERVICES = settingsTeste.importServices(setup.services);

export default settingsTeste;
