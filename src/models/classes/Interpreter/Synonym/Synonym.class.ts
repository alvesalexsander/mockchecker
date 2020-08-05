import ISynonym from './Synonym.interface';

export default class Synonym implements ISynonym {
    word: string;
    meaning: string;

    constructor(word: string, meaning: string) {
        this.word = word;
        this.meaning = meaning;
    }
}
