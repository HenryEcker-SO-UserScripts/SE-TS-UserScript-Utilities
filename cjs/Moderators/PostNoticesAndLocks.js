"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlockPost = exports.lockPost = exports.removePostNotice = exports.addPostNotice = void 0;
const General_1 = require("../Utilities/General");
function addPostNotice(postId, noticeId) {
    return (0, General_1.ajaxPostWithData)(`/admin/posts/${postId}/add-post-notice`, {
        noticetype: noticeId,
        fkey: StackExchange.options.user.fkey
    });
}
exports.addPostNotice = addPostNotice;
function removePostNotice(postId) {
    return (0, General_1.ajaxPostWithData)(`/admin/posts/${postId}/remove-post-notice`, {
        fkey: StackExchange.options.user.fkey
    });
}
exports.removePostNotice = removePostNotice;
function lockPost(postId, lockId, durationInHours = 24) {
    // duration -1 can be used to permanently lock the post
    return (0, General_1.ajaxPostWithData)(`/admin/posts/${postId}/lock`, {
        'mod-actions': 'lock',
        noticetype: lockId,
        duration: durationInHours,
        fkey: StackExchange.options.user.fkey
    });
}
exports.lockPost = lockPost;
function unlockPost(postId) {
    return (0, General_1.ajaxPostWithData)(`/admin/posts/${postId}/unlock`, {
        'mod-actions': 'unlock',
        fkey: StackExchange.options.user.fkey
    });
}
exports.unlockPost = unlockPost;
//# sourceMappingURL=PostNoticesAndLocks.js.map