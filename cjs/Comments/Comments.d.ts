import { type VoteResponse } from '../FlaggingAndVoting/Helpers';
import { type IdType } from '../Utilities/Types';
export declare function addComment(postId: IdType, commentText: string): Promise<string>;
export declare function deleteComment(commentId: IdType): Promise<VoteResponse>;
export declare function undeleteComment(postId: IdType, commentId: IdType): Promise<string>;
export declare function retrieveCommentEditHistory(commendId: IdType): Promise<string>;
