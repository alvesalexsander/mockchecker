/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
import IReportResponse from './ReportResponse.interface';
import IResponseTemplate from '../ResponseTemplate/ResponseTemplate.interface';

import TEMPLATES from '../ResponseTemplate';
import SETTINGS from '../../../../settings';
import Interpreter from '../../Interpreter/Interpreter.class';
const interpreter = new Interpreter({ settings: SETTINGS.INTERPRETER });

export default class ReportResponse implements IReportResponse {
    type: string;
    requiredServiceData: any;
    data: any;
    response: string;
    template: IResponseTemplate;

    constructor(configs: any = {}) {
        this.type = configs.type;
        this.data = configs.data;
        this.requiredServiceData = configs.requiredService || interpreter.translate(this.type);
        this.template = TEMPLATES[this.type];
        this.response = this.template && this.data ? this.template.generate(this.data) : undefined;
    }

    isValidData(): boolean {
        return typeof this.data === 'object' ? true : false;
    }

    generateResponse(): void {
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

    getResponse(): string {
        return this.response;
    }

    setData(data: any): object {
        this.data = data;
        return this;
    }

    setType(type: string): object {
        this.type = type;
        this.template = TEMPLATES[this.type];
        return this;
    }

    isReady(): boolean | object {
        if (this.isValidData() && this.template) {
            return true;
        } else {
            return false;
        }
    }
}
