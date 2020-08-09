'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
const filter = require('lodash.filter');
class MockExplorer {
    constructor(configs = {}) {
        this.mockList = {};
        this.mockList = (configs === null || configs === void 0 ? void 0 : configs.settings) || this.mockList;
    }
    hasMock(mockName) {
        return this.mockList[mockName] ? true : false;
    }
    showMocks() {
        console.log(Object.keys(this.mockList));
    }
    addToMockList(mockName, mockProvider) {
        try {
            this.mockList[mockName] = mockProvider;
            return true;
        } catch (e) {
            console.log('MockExplorer :: ERROR :: Failure adding a new mock to mockList.');
            console.log(e);
        }
    }
    getDataFor(dataIdentifier) {
        var _a;
        const dataCollection = {};
        if (Object.keys(this.mockList).length > 0) {
            for (const mock in this.mockList) {
                if ((_a = this.mockList[mock]) === null || _a === void 0 ? void 0 : _a[dataIdentifier]) {
                    dataCollection[mock] = this.mockList[mock][dataIdentifier];
                }
            }
            return dataCollection;
        }
    }
    getDataIn(mockIdentifier) {
        return this.mockList[mockIdentifier] ? this.mockList[mockIdentifier] : undefined;
    }
    hasIdentifierInMock(dataIdentifier, mockIdentifier) {
        if (this.mockList[mockIdentifier]) {
            if (this.mockList[mockIdentifier][dataIdentifier]) {
                return true;
            }
            return false;
        }
        return false;
    }
    find(req, mockIdentifier) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        let dataToReturn = [];
        if (this.hasMock(mockIdentifier)) {
            const mockData = this.mockList[mockIdentifier];
            if (
                ((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0
                    ? void 0
                    : _a.byKey) &&
                ((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0
                    ? void 0
                    : _b.byMatchingAny) &&
                ((_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0
                    ? void 0
                    : _c.byMatchingEvery)
            ) {
                dataToReturn = this.findWithKey(req.query.byKey, mockData);
                dataToReturn = this.findWithEveryMatches(req.query.byMatchingEvery, dataToReturn);
                dataToReturn = this.findWithAnyMatches(req.query.byMatchingAny, dataToReturn);
            } else if (
                ((_d = req === null || req === void 0 ? void 0 : req.query) === null || _d === void 0
                    ? void 0
                    : _d.byKey) &&
                ((_e = req === null || req === void 0 ? void 0 : req.query) === null || _e === void 0
                    ? void 0
                    : _e.byMatchingAny) &&
                !((_f = req === null || req === void 0 ? void 0 : req.query) === null || _f === void 0
                    ? void 0
                    : _f.byMatchingEvery)
            ) {
                dataToReturn = this.findWithKey(req.query.byKey, mockData);
                dataToReturn = this.findWithAnyMatches(req.query.byMatchingAny, dataToReturn);
            } else if (
                ((_g = req === null || req === void 0 ? void 0 : req.query) === null || _g === void 0
                    ? void 0
                    : _g.byKey) &&
                !((_h = req === null || req === void 0 ? void 0 : req.query) === null || _h === void 0
                    ? void 0
                    : _h.byMatchingAny) &&
                ((_j = req === null || req === void 0 ? void 0 : req.query) === null || _j === void 0
                    ? void 0
                    : _j.byMatchingEvery)
            ) {
                dataToReturn = this.findWithKey(req.query.byKey, mockData);
                dataToReturn = this.findWithEveryMatches(req.query.byMatchingEvery, dataToReturn);
            } else if (
                !((_k = req === null || req === void 0 ? void 0 : req.query) === null || _k === void 0
                    ? void 0
                    : _k.byKey) &&
                ((_l = req === null || req === void 0 ? void 0 : req.query) === null || _l === void 0
                    ? void 0
                    : _l.byMatchingAny) &&
                ((_m = req === null || req === void 0 ? void 0 : req.query) === null || _m === void 0
                    ? void 0
                    : _m.byMatchingEvery)
            ) {
                dataToReturn = this.findWithEveryMatches(req.query.byMatchingEvery, mockData);
                dataToReturn = this.findWithAnyMatches(req.query.byMatchingAny, dataToReturn);
            } else if (
                ((_o = req === null || req === void 0 ? void 0 : req.query) === null || _o === void 0
                    ? void 0
                    : _o.byKey) &&
                !((_p = req === null || req === void 0 ? void 0 : req.query) === null || _p === void 0
                    ? void 0
                    : _p.byMatchingAny) &&
                !((_q = req === null || req === void 0 ? void 0 : req.query) === null || _q === void 0
                    ? void 0
                    : _q.byMatchingEvery)
            ) {
                dataToReturn = this.findWithKey(req.query.byKey, mockData);
            } else if (
                !((_r = req === null || req === void 0 ? void 0 : req.query) === null || _r === void 0
                    ? void 0
                    : _r.byKey) &&
                ((_s = req === null || req === void 0 ? void 0 : req.query) === null || _s === void 0
                    ? void 0
                    : _s.byMatchingAny) &&
                !((_t = req === null || req === void 0 ? void 0 : req.query) === null || _t === void 0
                    ? void 0
                    : _t.byMatchingEvery)
            ) {
                dataToReturn = this.findWithAnyMatches(req.query.byMatchingAny, mockData);
            } else if (
                !((_u = req === null || req === void 0 ? void 0 : req.query) === null || _u === void 0
                    ? void 0
                    : _u.byKey) &&
                !((_v = req === null || req === void 0 ? void 0 : req.query) === null || _v === void 0
                    ? void 0
                    : _v.byMatchingAny) &&
                ((_w = req === null || req === void 0 ? void 0 : req.query) === null || _w === void 0
                    ? void 0
                    : _w.byMatchingEvery)
            ) {
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
    findWithKey(key, mockData) {
        const dataToReturn = {};
        if (typeof key === 'string') {
            if (Array.isArray(mockData) && mockData.length) {
                if (mockData.indexOf(key) >= 0) {
                    dataToReturn[key] = mockData.indexOf(key);
                }
                return dataToReturn;
            } else if (mockData === null || mockData === void 0 ? void 0 : mockData[key]) {
                dataToReturn[key] = mockData[key];
                return dataToReturn;
            } else {
                return dataToReturn;
            }
        }
        return dataToReturn;
    }
    findWithAnyMatches(matches, mockData) {
        const dataToReturn = {};
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
    findWithEveryMatches(matches, mockData) {
        const dataToReturn = {};
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
    getMock(mockIdentifier) {
        return this.hasMock(mockIdentifier) ? this.mockList[mockIdentifier] : {};
    }
}
exports.default = MockExplorer;
