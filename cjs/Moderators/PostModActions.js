"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeQuestion = void 0;
const General_1 = require("../Utilities/General");
function mergeQuestion(mergeSourceId, masterQuestionIdOrUrl) {
    // Returns an HTML Response
    return (0, General_1.ajaxPostWithData)(`/admin/posts/${mergeSourceId}/merge`, {
        fkey: StackExchange.options.user.fkey,
        masterQuestionIdOrUrl: masterQuestionIdOrUrl // Either the question Id or URL of the question
    });
}
exports.mergeQuestion = mergeQuestion;
//# sourceMappingURL=PostModActions.js.map