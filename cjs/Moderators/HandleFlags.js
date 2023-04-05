"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAsPlagiarism = void 0;
const General_1 = require("../Utilities/General");
function deleteAsPlagiarism(postId) {
    return (0, General_1.ajaxPostWithData)(`/admin/posts/${postId}/delete-as-plagiarism`, {
        fkey: StackExchange.options.user.fkey
    });
}
exports.deleteAsPlagiarism = deleteAsPlagiarism;
//# sourceMappingURL=HandleFlags.js.map