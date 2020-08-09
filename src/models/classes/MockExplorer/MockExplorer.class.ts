const filter = require('lodash.filter');

import IMockExplorer from './MockExplorer.interface';
import IRequest from '../Request/Request.interface';

export default class MockExplorer implements IMockExplorer {
    mockList: any = {};

    constructor(configs: any = {}) {
        this.mockList = configs?.settings || this.mockList;
    }

    hasMock(mockName: string): boolean {
        return this.mockList[mockName] ? true : false;
    }

    showMocks() {
        console.log(Object.keys(this.mockList));
    }

    addToMockList(mockName: string, mockProvider: object): boolean {
        try {
            this.mockList[mockName] = mockProvider;
            return true;
        } catch (e) {
            console.log('MockExplorer :: ERROR :: Failure adding a new mock to mockList.');
            console.log(e);
        }
    }

    getDataFor<T>(dataIdentifier: string): T {
        const dataCollection: any = {};
        if (Object.keys(this.mockList).length > 0) {
            for (const mock in this.mockList) {
                if (this.mockList[mock]?.[dataIdentifier]) {
                    dataCollection[mock] = this.mockList[mock][dataIdentifier];
                }
            }
            return dataCollection;
        }
    }

    getDataIn<T>(mockIdentifier: string): T {
        return this.mockList[mockIdentifier] ? this.mockList[mockIdentifier] : undefined;
    }

    hasIdentifierInMock(dataIdentifier: string, mockIdentifier: string): boolean {
        if (this.mockList[mockIdentifier]) {
            if (this.mockList[mockIdentifier][dataIdentifier]) {
                return true;
            }
            return false;
        }
        return false;
    }

    find<T>(req: IRequest, mockIdentifier: string): any {
        let dataToReturn: any = [];

        if (this.hasMock(mockIdentifier)) {
            const mockData = this.mockList[mockIdentifier];
            if (req?.query?.byKey && req?.query?.byMatchingAny && req?.query?.byMatchingEvery) {
                dataToReturn = this.findWithKey(req.query.byKey, mockData);
                dataToReturn = this.findWithEveryMatches(req.query.byMatchingEvery, dataToReturn);
                dataToReturn = this.findWithAnyMatches(req.query.byMatchingAny, dataToReturn);
            } else if (req?.query?.byKey && req?.query?.byMatchingAny && !req?.query?.byMatchingEvery) {
                dataToReturn = this.findWithKey(req.query.byKey, mockData);
                dataToReturn = this.findWithAnyMatches(req.query.byMatchingAny, dataToReturn);
            } else if (req?.query?.byKey && !req?.query?.byMatchingAny && req?.query?.byMatchingEvery) {
                dataToReturn = this.findWithKey(req.query.byKey, mockData);
                dataToReturn = this.findWithEveryMatches(req.query.byMatchingEvery, dataToReturn);
            } else if (!req?.query?.byKey && req?.query?.byMatchingAny && req?.query?.byMatchingEvery) {
                dataToReturn = this.findWithEveryMatches(req.query.byMatchingEvery, mockData);
                dataToReturn = this.findWithAnyMatches(req.query.byMatchingAny, dataToReturn);
            } else if (req?.query?.byKey && !req?.query?.byMatchingAny && !req?.query?.byMatchingEvery) {
                dataToReturn = this.findWithKey(req.query.byKey, mockData);
            } else if (!req?.query?.byKey && req?.query?.byMatchingAny && !req?.query?.byMatchingEvery) {
                dataToReturn = this.findWithAnyMatches(req.query.byMatchingAny, mockData);
            } else if (!req?.query?.byKey && !req?.query?.byMatchingAny && req?.query?.byMatchingEvery) {
                dataToReturn = this.findWithEveryMatches(req.query.byMatchingEvery, mockData);
            }
        }

        for (const item in dataToReturn) {
            if (dataToReturn[item] === undefined) {
                delete dataToReturn[item];
            }
        }
        return dataToReturn;
    }

    findWithKey(key: string, mockData: any): any {
        const dataToReturn: any = {};
        if (typeof key === 'string') {
            if (Array.isArray(mockData) && mockData.length) {
                if (mockData.indexOf(key) >= 0) {
                    dataToReturn[key] = mockData.indexOf(key);
                }
                return dataToReturn;
            } else if (mockData?.[key]) {
                dataToReturn[key] = mockData[key];
                return dataToReturn;
            } else {
                return dataToReturn;
            }
        }
        return dataToReturn;
    }

    findWithAnyMatches(matches: any, mockData: any): any {
        const dataToReturn: any = {};
        const conditionsToMatch = Object.keys(matches).length;

        if (conditionsToMatch && Object.keys(mockData).length) {
            for (const condition in matches) {
                for (const item in mockData) {
                    dataToReturn[item] = filter({ item: mockData[item] }, { [condition]: matches[condition] })[0];
                }
                if (dataToReturn.length > 0) {
                    return dataToReturn;
                }
            }
        }
        return dataToReturn;
    }

    findWithEveryMatches(matches: any, mockData: any): any {
        const dataToReturn: any = {};

        const conditionsToMatch = Object.keys(matches).length;

        if (conditionsToMatch && Object.keys(mockData).length) {
            for (const condition in matches) {
                for (const item in mockData) {
                    dataToReturn[item] = filter({ item: mockData[item] }, { [condition]: matches[condition] })[0];
                }
            }
        }
        return dataToReturn;
    }

    getMock<T>(mockIdentifier: string): T {
        return this.hasMock(mockIdentifier) ? this.mockList[mockIdentifier] : {};
    }
}
