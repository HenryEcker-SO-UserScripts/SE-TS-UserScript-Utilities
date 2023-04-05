"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotateUser = exports.deleteUser = exports.getUserPii = void 0;
const General_1 = require("../Utilities/General");
function getUserPii(userId) {
    return (0, General_1.ajaxPostWithData)('/admin/all-pii', { id: userId, fkey: StackExchange.options.user.fkey }).then((resText) => {
        const html = $(resText);
        return {
            email: html[1].children[1].innerText.trim(),
            name: html[1].children[3].innerText.trim(),
            ip: html[3].children[1].innerText.trim()
        };
    });
}
exports.getUserPii = getUserPii;
function deleteUser(userId, deleteReason, deleteReasonDetails) {
    return (0, General_1.ajaxPostWithDataStatusOnly)(`/admin/users/${userId}/delete`, {
        fkey: StackExchange.options.user.fkey,
        deleteReason: deleteReason,
        deleteReasonDetails: deleteReasonDetails
    });
}
exports.deleteUser = deleteUser;
function annotateUser(userId, annotationDetails) {
    return (0, General_1.ajaxPostWithDataStatusOnly)(`/admin/users/${userId}/annotate`, {
        fkey: StackExchange.options.user.fkey,
        annotation: annotationDetails
    });
}
exports.annotateUser = annotateUser;
//# sourceMappingURL=UserModActions.js.map