"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAsPlagiarism = void 0;
const General_1 = require("../Utilities/General");
// Currently relying on 200 status code since it sometimes returns an HTML response and sometimes JSON
// Depending on if the CM escalate message was displayed or not.
// export interface PostDeleteAsPlagiarismResponse {
//     success: boolean;
//     message: string;
// }
function deleteAsPlagiarism(postId) {
    return (0, General_1.fetchPostFormData)(`/admin/posts/${postId}/delete-as-plagiarism`, {
        fkey: StackExchange.options.user.fkey
    });
}
exports.deleteAsPlagiarism = deleteAsPlagiarism;
//# sourceMappingURL=HandleFlags.js.map