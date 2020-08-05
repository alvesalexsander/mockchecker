import IMeaningDomain from './MeaningDomain.interface';

const Synonym = require('../Synonym/Synonym.class');

export default class MeaningDomain implements IMeaningDomain {
    [key: string]: typeof Synonym.meaning;

    addKnowledge(knowledge: typeof Synonym) {
        this[knowledge.word] = knowledge.meaning;
    }

    hasKnowledge(synonym: string): string | boolean {
        if (this[synonym]) {
            return this[synonym];
        }
        return false;
    }

    getDomain(): MeaningDomain {
        return this;
    }

    getSynonyms(): string[] | [] {
        return Object.keys(this);
    }

    getMeanings(): string[] | [] {
        return Object.values(this).filter((meaning: string, index: number, arr: string[]) => {
            if (arr.includes(meaning)) {
                return;
            }
            return meaning;
        });
    }
}
