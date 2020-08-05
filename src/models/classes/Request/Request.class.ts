import IRequest from './Request.interface';

export default class Request implements IRequest {
    method: string = '';
    params: {
        [key: string]: any;
        dataIdentifier: any;
    };
    requiredServices: string[] | string;
    result: {
        [key: string]: any;
    };

    [key: string]: any;

    constructor({
        method = '',
        params = {} as {
            dataIdentifier: string;
            [key: string]: any;
        },
        requiredServices = '',
    }) {
        if (!params || !requiredServices) {
            throw new Error(
                "Request @ <object instantiation> :: ERROR :: Please, inform a 'requiredServices'(Array<string>) and 'params' object with properties which your services may use.",
            );
        }
        this.method = method || this.method;
        this.params = params;
        this.requiredServices = requiredServices;
    }

    param(paramName: string, paramValue: any): this {
        if (paramName !== 'requiredServices' && paramName !== 'dataIdentifier') {
            this.params[paramName] = paramValue;
            return this;
        }
        throw new Error(
            `Request @ <param method> :: ERROR :: Not possible to redefine 'dataIndentifier' or 'requiredServices' after object instantiation.`,
        );
    }
}
