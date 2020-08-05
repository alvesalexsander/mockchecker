import { Builder } from '../index';
import { Interpreter, MockExplorer, ServiceRepository } from '..';
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
     * Busca nos Services em availableServices pela informação correspondente ao req.params.dataIdentifier
     * @param req  Requisição IRequest
     */
    query(req: IRequest): any;
}
