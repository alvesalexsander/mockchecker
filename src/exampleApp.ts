import { mockchecker } from './index';

const req = mockchecker.create.Request({
    requiredServices: ['exampleService'],
    method: 'searchWithAgeLimit',
    params: {
        dataIdentifier: {
            firstName: 'Edmundo',
            ageLimit: 30,
        },
    },
});

console.log(mockchecker.serviceRepository.query(req));
