'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const Synonym = require('../Synonym/Synonym.class');
class MeaningDomain {
    addKnowledge(knowledge) {
        this[knowledge.word] = knowledge.meaning;
    }
    hasKnowledge(synonym) {
        if (this[synonym]) {
            return this[synonym];
        }
        return false;
    }
    getDomain() {
        return this;
    }
    getSynonyms() {
        return Object.keys(this);
    }
    getMeanings() {
        return Object.values(this).filter((meaning, index, arr) => {
            if (arr.includes(meaning)) {
                return;
            }
            return meaning;
        });
    }
}
exports.default = MeaningDomain;
