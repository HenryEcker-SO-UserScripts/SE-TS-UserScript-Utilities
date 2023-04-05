"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castPostsVote = exports.flagPost = void 0;
const General_1 = require("../Utilities/General");
function flagPost(flagType, postId, otherText, overrideWarning, customData) {
    const data = {
        fkey: StackExchange.options.user.fkey,
        otherText: otherText ?? ''
    };
    if (overrideWarning !== undefined) {
        data['overrideWarning'] = overrideWarning;
    }
    if (customData !== undefined) {
        data['customData'] = JSON.stringify(customData);
    }
    return (0, General_1.ajaxPostWithData)(`/flags/posts/${postId}/add/${flagType}`, data);
}
exports.flagPost = flagPost;
function castPostsVote(postId, voteType) {
    return (0, General_1.ajaxPostWithData)(`/posts/${postId}/vote/${voteType}`, {
        fkey: StackExchange.options.user.fkey
    });
}
exports.castPostsVote = castPostsVote;
//# sourceMappingURL=Helpers.js.map