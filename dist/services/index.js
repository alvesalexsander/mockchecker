'use strict';
/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ExampleService = exports.getServices = void 0;
const ExampleService_1 = __importDefault(require('./ExampleService'));
exports.ExampleService = ExampleService_1.default;
exports.getServices = () => {
    return {
        exampleService: new ExampleService_1.default(),
    };
};
