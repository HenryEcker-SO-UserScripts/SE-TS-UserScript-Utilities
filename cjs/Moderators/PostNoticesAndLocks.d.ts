import type { IdType } from '../Utilities/Types';
/**
 * affectedPostIds will normally return an array of length 1,
 *                 but in the case of Historical, Obsolete locks on questions
 *                 it will also lock the associated answers and return the values
 */
export interface NoticeLockPostResponse {
    success: boolean;
    affectedPostIds: number[];
}
type NoticeTypeId = (1 | // Needs citation
2 | // Current Event
3);
export declare function addPostNotice(postId: IdType, noticeId: NoticeTypeId): Promise<NoticeLockPostResponse>;
export declare function removePostNotice(postId: IdType): Promise<NoticeLockPostResponse>;
type LockTypeId = (20 | // Content Dispute
21 | // Comment Only Lock
22 | // Historical Lock
23 | // Wiki Lock
28);
export declare function lockPost(postId: IdType, lockId: LockTypeId, durationInHours?: number): Promise<NoticeLockPostResponse>;
export declare function unlockPost(postId: IdType): Promise<NoticeLockPostResponse>;
export {};
