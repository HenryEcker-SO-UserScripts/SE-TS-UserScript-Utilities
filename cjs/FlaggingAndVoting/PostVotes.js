"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVoteCounts = exports.undeletePost = exports.deletePost = void 0;
const Helpers_1 = require("./Helpers");
const General_1 = require("../Utilities/General");
function deletePost(postId) {
    return (0, Helpers_1.castPostsVote)(postId, 10);
}
exports.deletePost = deletePost;
function undeletePost(postId) {
    return (0, Helpers_1.castPostsVote)(postId, 11);
}
exports.undeletePost = undeletePost;
function getVoteCounts(postId) {
    return (0, General_1.ajaxGet)(`/posts/${postId}/vote-counts`);
}
exports.getVoteCounts = getVoteCounts;
//# sourceMappingURL=PostVotes.js.map