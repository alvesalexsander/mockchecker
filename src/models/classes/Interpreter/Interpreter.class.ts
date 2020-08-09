/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
import IInterpreter from './Interpreter.interface';
import Synonym from './Synonym/Synonym.class';
import MeaningDomain from './MeaningDomain/MeaningDomain.class';

// Interprete de INPUTS
export default class Interpreter implements IInterpreter {
    [key: string]: any;

    dictionary: MeaningDomain = new MeaningDomain();
    meanings: string[] = [];

    constructor({ ...configs }: any = {}) {
        for (const item in configs.settings) {
            if (this[item]) {
                switch (item) {
                    case 'meanings':
                        for (const meaning of configs.settings[item]) {
                            this.addMeaning(meaning);
                        }
                        break;
                    case 'dictionary':
                        for (const [synonym, meaning] of Object.entries(configs.settings[item])) {
                            this.assignSynonymFor(synonym, meaning.toString());
                        }
                }
            }
        }
    }

    public addMeaning(meaning: string) {
        if (!this.meanings.includes(meaning)) {
            this.meanings.push(meaning);
            return this;
        }
    }

    public assignSynonymFor(synonym: string | string[], meaning: string) {
        if (synonym instanceof Array) {
            for (const word of synonym) {
                this.dictionary.addKnowledge(new Synonym(word, meaning));
                if (!this.isValidMeaning(meaning)) {
                    this.meanings.push(meaning);
                }
            }
        }
        if (typeof synonym === 'string') {
            this.dictionary.addKnowledge(new Synonym(synonym, meaning));
            if (!this.isValidMeaning(meaning)) {
                this.meanings.push(meaning);
            }
        }
    }

    public translate(synonym: string): string | boolean {
        return this.dictionary.hasKnowledge(synonym) ? this.dictionary[synonym] : false;
    }

    isValidMeaning(meaning: string): boolean {
        if (this.meanings.includes(meaning)) {
            return true;
        }
        return false;
    }
}
