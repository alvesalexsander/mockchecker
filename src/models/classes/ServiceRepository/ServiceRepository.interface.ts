import IBaseService from '../BaseService/BaseService.interface';
import IRequest from '../Request/Request.interface';

export default interface IServiceRepository {
    availableServices: { [key: string]: IBaseService };

    /**
     * Busca nos Services em availableServices pela informação correspondente ao req.query.dataIdentifier
     * @param req  Requisição IRequest
     */
    query(req: IRequest): any;
}
