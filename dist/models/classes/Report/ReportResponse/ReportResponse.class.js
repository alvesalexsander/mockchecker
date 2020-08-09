'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const ResponseTemplate_1 = __importDefault(require('../ResponseTemplate'));
const settings_1 = __importDefault(require('../../../../settings'));
const Interpreter_class_1 = __importDefault(require('../../Interpreter/Interpreter.class'));
const interpreter = new Interpreter_class_1.default({ settings: settings_1.default.INTERPRETER });
class ReportResponse {
    constructor(configs = {}) {
        this.type = configs.type;
        this.data = configs.data;
        this.requiredServiceData = configs.requiredService || interpreter.translate(this.type);
        this.template = ResponseTemplate_1.default[this.type];
        this.response = this.template && this.data ? this.template.generate(this.data) : undefined;
    }
    isValidData() {
        return typeof this.data === 'object' ? true : false;
    }
    generateResponse() {
        if (this.isValidData() && this.template) {
            this.response = this.template.generate(this.data);
        } else if (!this.isValidData()) {
            throw new Error(`ReportResponse '${this.type}' :: ERROR :: 'data' property has a invalid value: ${this.data}.
            Please, use 'setData' method passing a valid data object`);
        } else if (!this.template) {
            throw new Error(`ReportResponse '${this.type}' :: ERROR :: A template '${this.type}' does not exists.
            Please, use 'setType' method to set a ReportResponse type and automatically import a template for this ReportResponse.`);
        }
    }
    getResponse() {
        return this.response;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    setType(type) {
        this.type = type;
        this.template = ResponseTemplate_1.default[this.type];
        return this;
    }
    isReady() {
        if (this.isValidData() && this.template) {
            return true;
        } else {
            return false;
        }
    }
}
exports.default = ReportResponse;
