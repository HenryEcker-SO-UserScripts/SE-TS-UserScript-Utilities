"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAsPlagiarism = void 0;
function deleteAsPlagiarism(postId) {
    return new Promise((resolve, reject) => {
        void $.ajax({
            type: 'POST',
            url: `/admin/posts/${postId}/delete-as-plagiarism`,
            data: {
                fkey: StackExchange.options.user.fkey
            },
            success: (json) => {
                resolve(json);
            },
            error: (res) => {
                reject(res);
            }
        });
    });
}
exports.deleteAsPlagiarism = deleteAsPlagiarism;
//# sourceMappingURL=HandleFlags.js.map