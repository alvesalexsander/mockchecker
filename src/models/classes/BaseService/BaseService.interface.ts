import IRequest from '../Request/Request.interface';

export default interface IBaseService {
    serviceName: string;
    serviceDescription: string;
    dataSource: string;
    dataStorage: {
        [key: string]: any;
    };

    /**
     * Recebe um Request e analisa a propriedade 'method'.
     * Caso a propriedade method seja válida, redireciona o Request para o handler apropriado.
     * Caso seja inválida, retorna um erro.
     * Caso não seja fornecido, será executada um operação 'default' ou 'read', nesta ordem de prioridade.
     * @param req Objeto Request
     */
    execute(req: IRequest): { [key: string]: any };

    /**
     * Recebe um Request encaminhado de 'execute' e executa uma operação de consulta no 'dataSource'
     * @param req Objeto Request
     */
    read(req: IRequest): { [key: string]: any };

    /**
     * Recebe um Request encaminhado de execute e executa uma operação de escrita no 'dataSource'
     * @param req Objeto Request
     */
    write(req: IRequest): { [key: string]: any };

    /**
     * Recebe um Request encaminhado de execute e executa uma operação de atualização no 'dataSource'
     * @param req Objeto Request
     */
    update(req: IRequest): { [key: string]: any };

    /**
     * Consulta MockExplorer e solicita os dados disponíveis para satisfazer a requisição.
     * @param req Objeto Request
     */
    requestData(req: IRequest): any;

    /**
     * Setter para serviceName
     * @param serviceName String para serviceName
     */
    name(serviceName: string): this;

    /**
     * Setter para serviceDescription
     * @param serviceName String para serviceDescription
     */
    description(serviceDescription: string): this;

    /**
     * Setter para dataSource
     * @param serviceName String para dataSource
     */
    source(dataSource: any): this;
}
