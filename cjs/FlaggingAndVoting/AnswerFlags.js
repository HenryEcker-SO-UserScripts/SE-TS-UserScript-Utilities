"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flagNotAnAnswer = void 0;
const Helpers_1 = require("./Helpers");
function flagNotAnAnswer(postId) {
    return (0, Helpers_1.flagPost)('AnswerNotAnAnswer', postId);
}
exports.flagNotAnAnswer = flagNotAnAnswer;
//# sourceMappingURL=AnswerFlags.js.map