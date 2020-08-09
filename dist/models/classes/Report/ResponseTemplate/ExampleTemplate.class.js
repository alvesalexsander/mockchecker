'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const BaseTemplate_class_1 = __importDefault(require('./BaseTemplate.class'));
class ExampleTemplate extends BaseTemplate_class_1.default {
    generate(data) {
        var _a, _b;
        let response = this.notFoundMessage;
        if (Object.keys(data).length) {
            response = '';
            for (const item in data) {
                response += `Customer name: ${
                    ((_a = data[item]) === null || _a === void 0 ? void 0 : _a.firstName) || this.notFoundMessage
                }\tAddress: ${
                    ((_b = data[item]) === null || _b === void 0 ? void 0 : _b.address) || this.notFoundMessage
                }\n`;
            }
        }
        return response;
    }
}
exports.default = ExampleTemplate;
