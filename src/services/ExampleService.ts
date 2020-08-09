import { BaseService } from '../models/classes/index';
import IRequest from '../models/classes/Request/Request.interface';

// Service classname may always be capitalized and finish with word 'Service'.
export default class ExampleService extends BaseService {
    serviceName: string = 'exampleService'; // 'serviceName' may be the same as the classname.
    serviceDescription: string = 'Example service description'; // Brief service description.
    dataSource: string = 'exampleMock'; // Name of the datasource at MockExplorer.

    constructor(configs: any = {}) {
        super(configs); // Calls for superclass constructor passing the config object { name, description, source }.
    }

    read(req: IRequest): { [key: string]: any } {
        // Put read logic here

        return {}; // Return object with treated data from your mocks
    }

    searchWithAgeLimit(req: IRequest): { [key: string]: any } {
        const customers = this.requestData(req);
        const result: any = {};
        for (const customer in customers) {
            if (
                customers[customer].firstName === req.query.byMatchingAny.firstName &&
                customers[customer].age < req.query.ageLimit
            ) {
                result[customer] = {
                    firstName: customers[customer].firstName,
                    address: customers[customer].address,
                };
            }
        }

        return result;
    }
}
