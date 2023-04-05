"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajaxPostWithDataStatusOnly = exports.ajaxPostWithData = exports.runVoidOnce = void 0;
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
function ajaxPostWithData(endPoint, data) {
    return new Promise((resolve, reject) => {
        void $.ajax({
            type: 'POST',
            url: endPoint,
            data: data,
            success: (json) => {
                resolve(json);
            },
            error: (res) => {
                reject(res);
            }
        });
    });
}
exports.ajaxPostWithData = ajaxPostWithData;
function ajaxPostWithDataStatusOnly(endPoint, data) {
    return new Promise((resolve, reject) => {
        void $.ajax({
            type: 'POST',
            url: endPoint,
            data: data,
            success: (data, textStatus, xhr) => {
                resolve({
                    status: xhr.status,
                    statusText: textStatus
                });
            },
            error: (res) => {
                reject(res);
            }
        });
    });
}
exports.ajaxPostWithDataStatusOnly = ajaxPostWithDataStatusOnly;
//# sourceMappingURL=General.js.map