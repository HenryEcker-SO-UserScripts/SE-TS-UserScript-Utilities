"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discardQuestionDraft = exports.isSuggestedEditQueueFull = exports.validatePostTags = exports.validatePostTitle = exports.validatePostBody = exports.postEditorHeartbeat = exports.editPost = exports.editTags = void 0;
const General_1 = require("../Utilities/General");
function editTags(postId, tags, reviewTaskId) {
    return (0, General_1.ajaxPostWithData)(`/posts/${postId}/edit-tags`, {
        tagnames: tags,
        fkey: StackExchange.options.user.fkey,
        reviewTaskId: reviewTaskId // undefined if no review task
    });
}
exports.editTags = editTags;
function editPost(postId, revisionGuid, title, postText, tags, editComment, isCurrent = true, author) {
    return (0, General_1.ajaxPostWithData)(`/posts/${postId}/edit-submit/${revisionGuid}`, {
        'is-current': isCurrent,
        'title': title,
        'post-text': postText,
        'fkey': StackExchange.options.user.fkey,
        'author': author ?? '',
        'tagnames': tags,
        'edit-comment': editComment
    });
}
exports.editPost = editPost;
function postEditorHeartbeat(postId, clientRevisionGuid) {
    return (0, General_1.ajaxPostWithData)(`/posts/${postId}/editor-heartbeat/edit`, {
        fkey: StackExchange.options.user.fkey,
        clientRevisionGuid: clientRevisionGuid
    });
}
exports.postEditorHeartbeat = postEditorHeartbeat;
function validatePostBody(body, oldBody, isQuestion, isSuggestedEdit = false) {
    return (0, General_1.ajaxPostWithData)('/posts/validate-body', {
        body: body,
        oldBody: oldBody,
        isQuestion: isQuestion,
        isSuggestedEdit: isSuggestedEdit,
        fkey: StackExchange.options.user.fkey
    });
}
exports.validatePostBody = validatePostBody;
function validatePostTitle(title) {
    return (0, General_1.ajaxPostWithData)('/posts/validate-title', {
        title: title,
        fkey: StackExchange.options.user.fkey
    });
}
exports.validatePostTitle = validatePostTitle;
function validatePostTags(tags, oldTags, postTypeId = 1) {
    return (0, General_1.ajaxPostWithData)('/posts/validate-title', {
        tags: tags,
        oldTags: oldTags,
        fkey: StackExchange.options.user.fkey,
        postTypeId: postTypeId
    });
}
exports.validatePostTags = validatePostTags;
function isSuggestedEditQueueFull(postId) {
    return fetch(`/posts/${postId}/edit`, {
        method: 'GET',
        credentials: 'omit' // Send without credentials
    }).then(({ status }) => {
        /*
         * Status 200 means can make suggestion i.e. NOT FULL (false)
         * Status 403 means can't make suggestion i.e. FULL   (true)
         */
        return status !== 200;
    });
}
exports.isSuggestedEditQueueFull = isSuggestedEditQueueFull;
function discardQuestionDraft() {
    return (0, General_1.ajaxPostWithData)('/post/discard-draft', {
        fkey: StackExchange.options.user.fkey,
        postType: 'ask'
    });
}
exports.discardQuestionDraft = discardQuestionDraft;
//# sourceMappingURL=EditPosts.js.map