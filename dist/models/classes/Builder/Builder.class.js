'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
const index_1 = require('../index');
class Builder {
    constructor() {
        for (const recipe in index_1.Classes) {
            if (index_1.Classes[recipe]) {
                this[recipe] = (settings = {}) => {
                    return new index_1.Classes[recipe](settings);
                };
            }
        }
    }
}
exports.default = new Builder();
