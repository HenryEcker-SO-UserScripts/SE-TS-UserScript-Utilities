"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajaxGet = exports.ajaxPostWithData = exports.runVoidOnce = void 0;
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
function ajaxPostWithData(endPoint, data, shouldReturnData = true) {
    return new Promise((resolve, reject) => {
        void $.ajax({
            type: 'POST',
            url: endPoint,
            data: data,
        }).done((resData, textStatus, xhr) => {
            resolve(shouldReturnData ?
                resData :
                {
                    status: xhr.status,
                    statusText: textStatus
                });
        }).fail((res) => {
            reject(res.responseText ?? 'An unknown error occurred');
        });
    });
}
exports.ajaxPostWithData = ajaxPostWithData;
function ajaxGet(endPoint) {
    return new Promise((resolve, reject) => {
        void $.ajax({
            type: 'GET',
            url: endPoint
        }).done((resData) => {
            resolve(resData);
        }).fail((res) => {
            reject(res.responseText ?? 'An unknown error occurred');
        });
    });
}
exports.ajaxGet = ajaxGet;
//# sourceMappingURL=General.js.map