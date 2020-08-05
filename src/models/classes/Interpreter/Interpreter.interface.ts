const MeaningDomain = require('./MeaningDomain.class');
// const Synonym = require('./Synonym.class');

export default interface IInterpreter {
    dictionary: typeof MeaningDomain;
    meanings: string[];

    /**
     * Recebe um 'meaning' e adiciona a propriedade 'meanings'.
     * @param meaning Significado que será adicionado ao array 'meanings'
     */
    addMeaning(meaning: string): this;

    /**
     * Associa o(s) sinônimo(s) ao significado
     * @param synonym Sinônimo (string) ou sinônimos: (array<string>)
     * @param meaningWord Significado
     */
    assignSynonymFor(synonym: string | string[], meaningWord: string): void;

    /**
     * Verifica se o significado existe na propriedade 'meanings'
     * @param meaningWord Significado
     */
    isValidMeaning(meaningWord: string): boolean;

    /**
     * Recebe um 'synonym' e verifica se existe algum 'meaning' para este.
     * @param synonym Sinônimo (string)
     */
    translate(synonym: string): string | boolean;
}
