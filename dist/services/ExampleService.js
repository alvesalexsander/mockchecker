'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
const index_1 = require('../models/classes/index');
// Service classname may always be capitalized and finish with word 'Service'.
class ExampleService extends index_1.BaseService {
    constructor(configs = {}) {
        super(configs); // Calls for superclass constructor passing the config object { name, description, source }.
        this.serviceName = 'exampleService'; // 'serviceName' may be the same as the classname.
        this.serviceDescription = 'Example service description'; // Brief service description.
        this.dataSource = 'exampleMock'; // Name of the datasource at MockExplorer.
    }
    read(req) {
        // Put read logic here
        return {}; // Return object with treated data from your mocks
    }
    searchWithAgeLimit(req) {
        const customers = this.requestData(req);
        const result = {};
        for (const customer in customers) {
            if (
                customers[customer].firstName === req.query.byMatchingEvery.firstName &&
                customers[customer].age < req.query.ageLimit
            ) {
                result[customer] = {
                    firstName: customers[customer].firstName,
                    lastName: customers[customer].lastName,
                    address: customers[customer].address,
                    age: customers[customer].age,
                };
            }
        }
        return result;
    }
}
exports.default = ExampleService;
