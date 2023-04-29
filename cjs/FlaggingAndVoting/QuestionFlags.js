"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeQuestionAsDuplicate = exports.reopenQuestion = void 0;
const General_1 = require("../Utilities/General");
function reopenQuestion(postId) {
    return (0, General_1.ajaxPostWithData)(`/flags/questions/${postId}/reopen/add`, {
        fkey: StackExchange.options.user.fkey
    });
}
exports.reopenQuestion = reopenQuestion;
function closeQuestionAsDuplicate(postId, dupeTargetId) {
    const flagConfig = {
        fkey: StackExchange.options.user.fkey,
        closeReasonId: 'Duplicate',
        duplicateOfQuestionId: dupeTargetId
    };
    return (0, General_1.ajaxPostWithData)(`/flags/questions/${postId}/close/add`, flagConfig);
}
exports.closeQuestionAsDuplicate = closeQuestionAsDuplicate;
//# sourceMappingURL=QuestionFlags.js.map