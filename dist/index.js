'use strict';
/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.mockchecker = void 0;
const App_class_1 = __importDefault(require('./models/classes/App/App.class'));
const mockchecker = new App_class_1.default();
exports.mockchecker = mockchecker;
mockchecker.init();
