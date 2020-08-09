/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
const Synonym = require('../Synonym/Synonym.class');

export default interface IMeaningDomain {
    [key: string]: typeof Synonym.meaning;

    /**
     * Recebe um objeto<Synonym> e registra uma propriedade neste objeto com o par de valores 'word': 'meaning'.
     * @param knowledge Objeto<Synonym> com as propriedades 'word'
     */
    addKnowledge<T>(knowledge: T): void;

    /**
     * Recebe uma string e, caso haja, retornar o significado desta.
     * @param synonym Sinônimo (string)
     */
    hasKnowledge(synonym: string): string | boolean;

    /**
     * Retorna este objeto MeaningDomain.
     */
    getDomain(): object;

    /**
     * Retorna todos os sinônimos.
     */
    getSynonyms(): string[] | [];

    /**
     * Retorna todos os significados.
     */
    getMeanings(): string[] | [];
}
