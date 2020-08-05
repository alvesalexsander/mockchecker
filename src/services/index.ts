import ExampleService from './ExampleService';

export const getServices = (): any => {
    return {
        exampleService: new ExampleService(),
    };
};

export { ExampleService };
