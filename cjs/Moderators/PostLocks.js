"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlockPost = exports.lockPost = void 0;
const General_1 = require("../Utilities/General");
function lockPost(postId, lockId, durationInHours = 24) {
    // duration -1 can be used to permanently lock the post
    return (0, General_1.fetchPostFormDataBodyJsonResponse)(`/admin/posts/${postId}/lock`, {
        'mod-actions': 'lock',
        noticetype: lockId,
        duration: durationInHours,
        fkey: StackExchange.options.user.fkey
    });
}
exports.lockPost = lockPost;
function unlockPost(postId) {
    return (0, General_1.fetchPostFormDataBodyJsonResponse)(`/admin/posts/${postId}/unlock`, {
        'mod-actions': 'unlock',
        fkey: StackExchange.options.user.fkey
    });
}
exports.unlockPost = unlockPost;
//# sourceMappingURL=PostLocks.js.map