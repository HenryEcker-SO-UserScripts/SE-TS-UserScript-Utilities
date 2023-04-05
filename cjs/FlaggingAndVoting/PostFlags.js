"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flagInNeedOfModeratorIntervention = exports.flagVeryLowQuality = exports.flagPlagiarizedContent = exports.flagRudeOrAbusive = exports.flagSpam = exports.reopenQuestion = void 0;
const Helpers_1 = require("./Helpers");
const General_1 = require("../Utilities/General");
function reopenQuestion(postId) {
    return (0, General_1.ajaxPostWithData)(`/flags/questions/${postId}/reopen/add`, {
        fkey: StackExchange.options.user.fkey
    });
}
exports.reopenQuestion = reopenQuestion;
function flagSpam(postId) {
    return (0, Helpers_1.flagPost)('PostSpam', postId, null, true);
}
exports.flagSpam = flagSpam;
function flagRudeOrAbusive(postId) {
    return (0, Helpers_1.flagPost)('PostOffensive', postId, null, true);
}
exports.flagRudeOrAbusive = flagRudeOrAbusive;
function flagPlagiarizedContent(postId, originalSource, detailText) {
    return (0, Helpers_1.flagPost)('PlagiarizedContent', postId, detailText, false, { plagiarizedSource: originalSource });
}
exports.flagPlagiarizedContent = flagPlagiarizedContent;
function flagVeryLowQuality(postId) {
    return (0, Helpers_1.flagPost)('PostLowQuality', postId);
}
exports.flagVeryLowQuality = flagVeryLowQuality;
function flagInNeedOfModeratorIntervention(postId, detailText) {
    return (0, Helpers_1.flagPost)('PostOther', postId, detailText);
}
exports.flagInNeedOfModeratorIntervention = flagInNeedOfModeratorIntervention;
//# sourceMappingURL=PostFlags.js.map