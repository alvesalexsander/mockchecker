'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Request {
    constructor({ method = '', query = {}, requiredServices = '' }) {
        this.method = '';
        if (!query || !requiredServices) {
            throw new Error(
                "Request @ <object instantiation> :: ERROR :: Please, inform a 'requiredServices'(Array<string>) and 'query' object with properties which your services may use.",
            );
        }
        this.method = method || this.method;
        this.query = query;
        this.requiredServices = requiredServices;
    }
    and(key, value) {
        this.query.byMatchingEvery[key] = value;
        return this;
    }
    or(key, value) {
        this.query.byMatchingAny[key] = value;
        return this;
    }
}
exports.default = Request;
