"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPostFormDataBodyJsonResponse = exports.fetchPostFormData = exports.getFormDataFromObject = exports.runVoidOnce = void 0;
function runVoidOnce(fn) {
    let hasRun = false;
    return function (...args) {
        if (hasRun === false) {
            Reflect.apply(fn, this, args);
            hasRun = true;
        }
    };
}
exports.runVoidOnce = runVoidOnce;
function getFormDataFromObject(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc.set(key, value);
        return acc;
    }, new FormData());
}
exports.getFormDataFromObject = getFormDataFromObject;
function fetchPostFormData(endPoint, data) {
    return fetch(endPoint, {
        method: 'POST',
        body: getFormDataFromObject(data)
    });
}
exports.fetchPostFormData = fetchPostFormData;
function fetchPostFormDataBodyJsonResponse(endPoint, data) {
    return fetchPostFormData(endPoint, data).then(res => res.json());
}
exports.fetchPostFormDataBodyJsonResponse = fetchPostFormDataBodyJsonResponse;
//# sourceMappingURL=General.js.map