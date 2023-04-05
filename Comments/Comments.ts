import {type VoteResponse} from '../FlaggingAndVoting/Helpers';
import {ajaxPostWithData} from '../Utilities/General';
import {type IdType} from '../Utilities/Types';

export function addComment(postId: IdType, commentText: string) {
    // Returns the full UI of all comments
    return ajaxPostWithData<string>(
        `/posts/${postId}/comments`,
        {
            fkey: StackExchange.options.user.fkey,
            comment: commentText
        }
    );
}


export function deleteComment(commentId: IdType) {
    return ajaxPostWithData<VoteResponse>(
        `/posts/comments/${commentId}/vote/10`,
        {
            fkey: StackExchange.options.user.fkey,
            sendCommentBackInMessage: false
        }
    );
}

export function undeleteComment(postId: IdType, commentId: IdType) {
    // Returns the full UI of all comments
    return ajaxPostWithData<string>(
        `/admin/posts/${postId}/comments/${commentId}/undelete`,
        {
            fkey: StackExchange.options.user.fkey
        }
    );
}


export function retrieveCommentEditHistory(commendId: IdType) {
    // Returns the HTML component
    return ajaxPostWithData<string>(`/posts/comments/${commendId}/edit-history`, {});
}