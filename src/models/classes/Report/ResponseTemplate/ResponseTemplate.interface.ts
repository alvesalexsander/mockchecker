/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
export default interface IResponseTemplate {
    /**
     * String que será exibida caso os dados recebidos para
     */
    notFoundMessage: string;

    /**
     * Contém as instruções para gerar uma resposta utilizando o dado recebido.
     * Retorna a resposta gerada.
     * @param data Dados para gerar completar o template
     */
    generate(data: any): string;
}
