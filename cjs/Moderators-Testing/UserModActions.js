"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotateUser = exports.deleteUser = exports.getUserPii = void 0;
function getUserPii(userId) {
    console.log('Fetching PII for', userId);
    return Promise.resolve({
        email: 'sample@example.com',
        name: 'First Last',
        ip: '0.0.0.0'
    });
}
exports.getUserPii = getUserPii;
function deleteUser(userId, deleteReason, deleteReasonDetails) {
    console.log('Deletion', {
        userId,
        deleteReason,
        deleteReasonDetails
    });
    return Promise.resolve({
        status: 200
    });
}
exports.deleteUser = deleteUser;
function annotateUser(userId, annotationDetails) {
    console.log('Annotation', {
        userId,
        annotationDetails
    });
    return Promise.resolve({
        status: 200
    });
}
exports.annotateUser = annotateUser;
//# sourceMappingURL=UserModActions.js.map