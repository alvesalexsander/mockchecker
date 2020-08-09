/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
import { Builder } from '../index';
import IRequest from '../Request/Request.interface';
import IInterpreter from '../Interpreter/Interpreter.interface';
import IMockExplorer from '../MockExplorer/MockExplorer.interface';
import IServiceRepository from '../ServiceRepository/ServiceRepository.interface';

export default interface IApp {
    [key: string]: any;

    create: typeof Builder;
    interpreter: IInterpreter;
    mockExplorer: IMockExplorer;
    serviceRepository: IServiceRepository;

    /**
     * Busca nos Services em availableServices pela informação correspondente ao req.query.dataIdentifier
     * @param req  Requisição IRequest
     */
    query(req: IRequest): any;
}
