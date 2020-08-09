'use strict';
/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
Object.defineProperty(exports, '__esModule', { value: true });
// First, import Mockchecker App:
const index_1 = require('./index');
// Mockchecker App has a builder called 'create'.
// Using the 'create' method below, we are instantiating a Request object.
// passing as instantiation parameters:
//  requiredServices - services that this Request will be addressed.
//  method - method/handle that will treat the Request.
//  query - parameters that will filter your mock results
const req = index_1.mockchecker.create.Request({
    requiredServices: ['exampleService'],
    method: 'searchWithAgeLimit',
    query: {
        // Query only for entries with provided set of conditions.
        byMatchingEvery: {
            firstName: 'Edmundo',
        },
        // Query for any entries that matches at least one of provided conditions.
        byMatchingAny: {
            firstName: 'Edmundo',
        },
        // Custom data that can be handled by a service.
        ageLimit: 33,
    },
});
// Below, we are passing our Request to Mockchecker App 'query' method.
// Method 'query' can receive Request objects and ask for mock data
// that match to query conditions.
// For further information, please, visit project's github page.
const data = index_1.mockchecker.query(req);
// Printing data to check results.
console.log(data);
// We can also create a ReportResponse to standardize output texts
// with data we got from our mocks.
// If the 'type' we pass as a parameter matches a ResponseTemplate
// It will automatically import the respective ResponseTemplate
// In this case, we pass 'example' as type and the ReportResponse
// will import the ExemplaTemplate. You can check it out in
// ./models/classes/Report/ResponseTemplate/index.ts
const resp = index_1.mockchecker.create.ReportResponse({
    type: 'example',
});
// Setting our data and generating the response
resp.setData(data).generateResponse();
// Then, we can finally get access to the generate response
// by using the 'getResponse' method for the ReportResponse object
console.log(resp.getResponse());
