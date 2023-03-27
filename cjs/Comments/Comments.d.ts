import { type IdType } from '../Utilities/Types';
export declare function addComment(postId: IdType, commentText: string): Promise<Response>;
export declare function deleteComment(commentId: IdType): Promise<{
    Success: boolean;
}>;
export declare function undeleteComment(postId: IdType, commentId: IdType): Promise<{
    Success: boolean;
}>;
export declare function retrieveCommentEditHistory(commendId: IdType): Promise<string>;
