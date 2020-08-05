// import Inspector from './Inspector/Inspector.class';
import Interpreter from './Interpreter/Interpreter.class';
import MeaningDomain from './Interpreter/MeaningDomain/MeaningDomain.class';
import Synonym from './Interpreter/Synonym/Synonym.class';
import ReportResponse from './Report/ReportResponse/ReportResponse.class';
import BaseService from './BaseService/BaseService.class';
import MockExplorer from './MockExplorer/MockExplorer.class';
import Request from './Request/Request.class';
import ServiceRepository from './ServiceRepository/ServiceRepository.class';
import Builder from './Builder/Builder.class';
import Settings from './Settings/Settings.class';

export const Classes: { [key: string]: any } = {
    Interpreter,
    ReportResponse,
    MockExplorer,
    Request,
    ServiceRepository,
};

export {
    Interpreter,
    MeaningDomain,
    Synonym,
    ReportResponse,
    BaseService,
    MockExplorer,
    Request,
    ServiceRepository,
    Builder,
    Settings,
};
