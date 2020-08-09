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
exports.Settings = exports.Builder = exports.ServiceRepository = exports.Request = exports.MockExplorer = exports.BaseService = exports.ReportResponse = exports.Synonym = exports.MeaningDomain = exports.Interpreter = exports.Classes = void 0;
const Interpreter_class_1 = __importDefault(require('./Interpreter/Interpreter.class'));
exports.Interpreter = Interpreter_class_1.default;
const MeaningDomain_class_1 = __importDefault(require('./Interpreter/MeaningDomain/MeaningDomain.class'));
exports.MeaningDomain = MeaningDomain_class_1.default;
const Synonym_class_1 = __importDefault(require('./Interpreter/Synonym/Synonym.class'));
exports.Synonym = Synonym_class_1.default;
const ReportResponse_class_1 = __importDefault(require('./Report/ReportResponse/ReportResponse.class'));
exports.ReportResponse = ReportResponse_class_1.default;
const BaseService_class_1 = __importDefault(require('./BaseService/BaseService.class'));
exports.BaseService = BaseService_class_1.default;
const MockExplorer_class_1 = __importDefault(require('./MockExplorer/MockExplorer.class'));
exports.MockExplorer = MockExplorer_class_1.default;
const Request_class_1 = __importDefault(require('./Request/Request.class'));
exports.Request = Request_class_1.default;
const ServiceRepository_class_1 = __importDefault(require('./ServiceRepository/ServiceRepository.class'));
exports.ServiceRepository = ServiceRepository_class_1.default;
const Builder_class_1 = __importDefault(require('./Builder/Builder.class'));
exports.Builder = Builder_class_1.default;
const Settings_class_1 = __importDefault(require('./Settings/Settings.class'));
exports.Settings = Settings_class_1.default;
exports.Classes = {
    Interpreter: Interpreter_class_1.default,
    ReportResponse: ReportResponse_class_1.default,
    MockExplorer: MockExplorer_class_1.default,
    Request: Request_class_1.default,
    ServiceRepository: ServiceRepository_class_1.default,
};
