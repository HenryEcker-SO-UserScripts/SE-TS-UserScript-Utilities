"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveCommentEditHistory = exports.undeleteComment = exports.deleteComment = exports.addComment = void 0;
const General_1 = require("../Utilities/General");
function addComment(postId, commentText) {
    return (0, General_1.fetchPostFormData)(`/posts/${postId}/comments`, {
        fkey: StackExchange.options.user.fkey,
        comment: commentText
    });
}
exports.addComment = addComment;
function deleteComment(commentId) {
    return (0, General_1.fetchPostFormDataBodyJsonResponse)(`/posts/comments/${commentId}/vote/10`, {
        fkey: StackExchange.options.user.fkey,
        sendCommentBackInMessage: false
    });
}
exports.deleteComment = deleteComment;
function undeleteComment(postId, commentId) {
    return (0, General_1.fetchPostFormDataBodyJsonResponse)(`/admin/posts/${postId}/comments/${commentId}/undelete`, {
        fkey: StackExchange.options.user.fkey
    });
}
exports.undeleteComment = undeleteComment;
function retrieveCommentEditHistory(commendId) {
    // Returns a HTML component
    return fetch(`/posts/comments/${commendId}/edit-history`)
        .then(res => res.text());
}
exports.retrieveCommentEditHistory = retrieveCommentEditHistory;
//# sourceMappingURL=Comments.js.map