/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
import IResponseTemplate from './ResponseTemplate.interface';
import BaseTemplate from './BaseTemplate.class';

export default class ExampleTemplate extends BaseTemplate implements IResponseTemplate {
    generate(data: any): string {
        let response = this.notFoundMessage;
        if (Object.keys(data).length) {
            response = '';
            for (const item in data) {
                response += `Customer name: ${data[item]?.firstName || this.notFoundMessage}\tAddress: ${
                    data[item]?.address || this.notFoundMessage
                }\n`;
            }
        }

        return response;
    }
}
