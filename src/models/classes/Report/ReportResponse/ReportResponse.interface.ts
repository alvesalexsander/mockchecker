/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/

export default interface IReportResponse {
    type: string;
    requiredServiceData: any;
    data: any;
    response: string;

    /**
     * Retorna true se 'data' for válida ou false se for inválida.
     */
    isValidData(): boolean;

    /**
     * Recebe um objeto responseTemplate que é responsavel por tratar
     * a response de acordo com o 'type' e 'data' disponíveis.
     */
    generateResponse(): void;

    /**
     * Getter para 'response'.
     */
    getResponse(): string;

    /**
     * Setter para 'data'.
     * @param data Dados para serem explorados afim de montar a response.
     */
    setData(data: any): object;

    /**
     * Setter para 'type'.
     * @param type Tipo para definir 'type' neste objeto
     */
    setType(type: string): object;

    /**
     * Verifica se o objeto possui os principais dados para reportar uma resposta.
     * Retorna o objeto, caso sim / false, caso não
     */
    isReady(): boolean | object;
}
