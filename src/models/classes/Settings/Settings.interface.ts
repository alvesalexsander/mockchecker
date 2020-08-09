/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
export default interface ISettings {
    [key: string]: any;

    /**
     * Import mocks from setup.json
     * @param mocks mocks imported from setup.json
     */
    importMocks(mocks: { [key: string]: string }): { [key: string]: any };

    /**
     * Import dictionary from setup.json
     * @param dictionary dictionary imported from setup.json
     */
    importDictionary(dictionary: { [key: string]: string }): { [key: string]: string };

    /**
     * Import services from setup.json
     * @param services services imported from setup.json
     */
    importServices(services: { [key: string]: any }): any;

    /**
     * Import extraModules from setup.json
     * @param extraModules extraModules imported from setup.json
     */
    importExtras(extraModules: { [key: string]: any }): any;
}
