'use strict';
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
        return t;
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const Synonym_class_1 = __importDefault(require('./Synonym/Synonym.class'));
const MeaningDomain_class_1 = __importDefault(require('./MeaningDomain/MeaningDomain.class'));
// Interprete de INPUTS
class Interpreter {
    constructor(_a = {}) {
        var configs = __rest(_a, []);
        this.dictionary = new MeaningDomain_class_1.default();
        this.meanings = [];
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
    addMeaning(meaning) {
        if (!this.meanings.includes(meaning)) {
            this.meanings.push(meaning);
            return this;
        }
    }
    assignSynonymFor(synonym, meaning) {
        if (synonym instanceof Array) {
            for (const word of synonym) {
                this.dictionary.addKnowledge(new Synonym_class_1.default(word, meaning));
                if (!this.isValidMeaning(meaning)) {
                    this.meanings.push(meaning);
                }
            }
        }
        if (typeof synonym === 'string') {
            this.dictionary.addKnowledge(new Synonym_class_1.default(synonym, meaning));
            if (!this.isValidMeaning(meaning)) {
                this.meanings.push(meaning);
            }
        }
    }
    translate(synonym) {
        return this.dictionary.hasKnowledge(synonym) ? this.dictionary[synonym] : false;
    }
    isValidMeaning(meaning) {
        if (this.meanings.includes(meaning)) {
            return true;
        }
        return false;
    }
}
exports.default = Interpreter;
