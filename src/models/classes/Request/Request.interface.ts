export default interface IRequest {
    method: string;
    params: {
        [key: string]: any;
        dataIdentifier: any;
    };
    requiredServices: string[] | string;
    result: {
        [key: string]: any;
    };

    /**
     * Seta um novo parametro em params.
     * @param paramName String que represetará a nova key em params
     * @param paramValue Value de params[paramName]
     */
    param(paramName: string, paramValue: any): this;
}
