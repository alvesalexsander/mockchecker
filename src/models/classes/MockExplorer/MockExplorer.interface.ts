export default interface IMockExplorer {
    mockList: {
        [key: string]: never;
    };

    /**
     * Recebe um mockName<string> e verifica se o mock existe neste MockExplorer
     * @param mockName Nome do mock
     */
    hasMock(mockName: string): boolean;

    /**
     * Recebe um mockName<string> que será a chave de um mockProvider<objeto> e adiciona em mockList
     * @param mockName String que representa o nome do mock
     * @param mockProvider Objeto de mocks
     */
    addToMockList(mockName: string, mockProvider: object): boolean;

    /**
     * Recebe um dataIdentifier<string> e retorna todas as informações para aquele identificador
     * @param dataIdentifier String que identifica a chave que vai ter o valor retornado
     */
    getDataFor<T>(dataIdentifier: string): T;

    /**
     * Recebe um mockIdentifier<string> e retorna todas as informações daquele mock
     * @param mockIdentifier String que identifica a chave que vai ter o valor retornado
     */
    getDataIn<T>(mockIdentifier: string): T;

    /**
     * Recebe um dataIdentifier<string> e um mockIdentifier<string> e verifica se o dataIdentifier
     * existe no mock de chave referente ao mockIdentifier
     * @param dataIdentifier String que identifica a chave que vai ter o valor retornado
     * @param mockIdentifier String que identifica a chave do mock que vai ser pesquisado
     */
    hasIdentifierInMock(dataIdentifier: string, mockIdentifier: string): boolean;

    /**
     * Recebe um dataIdentifier<string> e um mockIdentifier<string> e retorna os dados relacionados ao dataIdentifier
     * no mock de chave referente ao mockIdentifier
     * @param dataIdentifier String que identifica a chave que vai ter o valor retornado
     * @param mockIdentifier String que identifica a chave que vai ter o valor retornado
     */
    find<T>(dataIdentifier: string, mockIdentifier: string): T;

    getMock<T>(mockIdentifier: string): T;
}
