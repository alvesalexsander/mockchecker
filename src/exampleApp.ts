import { mockchecker } from './index';

const req = mockchecker.create.Request({
    requiredServices: ['exampleService'],
    method: 'searchWithAgeLimit',
    query: {
        byMatchingAny: {
            firstName: 'Edmundo',
        },
        ageLimit: 30,
    },
});

const data = mockchecker.serviceRepository.query(req);
console.log(data);

const resp = mockchecker.create.ReportResponse({
    type: 'example',
});
resp.setData(data).generateResponse();

console.log(resp.getResponse());