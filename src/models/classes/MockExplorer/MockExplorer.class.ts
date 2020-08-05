import IMockExplorer from './MockExplorer.interface';

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

    find<T>(dataIdentifier: string, mockIdentifier: string): T {
        return this.mockList[mockIdentifier]?.[dataIdentifier] || {};
    }

    getMock<T>(mockIdentifier: string): T {
        return this.hasMock(mockIdentifier) ? this.mockList[mockIdentifier] : {};
    }
}
