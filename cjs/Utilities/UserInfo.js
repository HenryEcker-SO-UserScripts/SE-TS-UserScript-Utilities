"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserIdFromHref = exports.fetchFullUrlFromUserId = void 0;
function fetchFullUrlFromUserId(userId) {
    return fetch(`/users/${userId}`, { method: 'OPTIONS' })
        .then(res => res.url);
}
exports.fetchFullUrlFromUserId = fetchFullUrlFromUserId;
function fetchUserIdFromHref(href, convertToNumber = true) {
    let match = href.match(/\/users\/(\d+)\/.*/i);
    if (match === null) {
        // Try other option
        match = href.match(/users\/account-info\/(\d+)/i);
    }
    // If match is still null or length does not match expectation return undefined
    if (match === null || match.length < 2) {
        return undefined;
    }
    if (!convertToNumber) {
        return match[1];
    }
    return Number(match[1]);
}
exports.fetchUserIdFromHref = fetchUserIdFromHref;
//# sourceMappingURL=UserInfo.js.map