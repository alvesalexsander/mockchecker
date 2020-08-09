/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/

import ExampleService from './ExampleService';

export const getServices = (): any => {
    return {
        exampleService: new ExampleService(),
    };
};

export { ExampleService };
