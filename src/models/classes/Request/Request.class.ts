/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
import IRequest from './Request.interface';

export default class Request implements IRequest {
    method: string = '';
    query: {
        [key: string]: any;
        byKey?: string;
        byMatchingAny?: {
            [key: string]: any;
        };
        byMatchingEvery?: {
            [key: string]: any;
        };
    };
    requiredServices: string[] | string;

    [key: string]: any;

    constructor({
        method = '',
        query = {} as {
            [key: string]: any;
            byKey: string;
            byMatching: any;
        },
        requiredServices = '',
    }) {
        if (!query || !requiredServices) {
            throw new Error(
                "Request @ <object instantiation> :: ERROR :: Please, inform a 'requiredServices'(Array<string>) and 'query' object with properties which your services may use.",
            );
        }
        this.method = method || this.method;
        this.query = query;
        this.requiredServices = requiredServices;
    }

    and(key: string, value: any): this {
        this.query.byMatchingEvery[key] = value;
        return this;
    }

    or(key: string, value: any): this {
        this.query.byMatchingAny[key] = value;
        return this;
    }
}
