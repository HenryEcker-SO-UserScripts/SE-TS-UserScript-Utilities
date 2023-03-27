"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undeletePost = exports.deletePost = void 0;
const Helpers_1 = require("./Helpers");
function deletePost(postId) {
    return (0, Helpers_1.castPostsVote)(postId, 10);
}
exports.deletePost = deletePost;
function undeletePost(postId) {
    return (0, Helpers_1.castPostsVote)(postId, 11);
}
exports.undeletePost = undeletePost;
//# sourceMappingURL=PostVotes.js.map