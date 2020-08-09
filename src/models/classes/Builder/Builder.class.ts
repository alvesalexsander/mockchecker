/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
import { Classes } from '../index';

class Builder {
    [key: string]: any;

    constructor() {
        for (const recipe in Classes) {
            if (Classes[recipe]) {
                this[recipe] = (settings: { [key: string]: any } = {}) => {
                    return new Classes[recipe](settings);
                };
            }
        }
    }
}

export default new Builder();
