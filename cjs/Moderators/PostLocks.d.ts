import type { IdType } from '../Utilities/Types';
type LockTypeId = (20 | // Content Dispute
21 | // Comment Only Lock
22 | // Historical Lock
23 | // Wiki Lock
28);
export interface LockPostResponse {
    success: boolean;
    affectedPostIds: number[];
}
export declare function lockPost(postId: IdType, lockId: LockTypeId, durationInHours?: number): Promise<LockPostResponse>;
export declare function unlockPost(postId: IdType): Promise<LockPostResponse>;
export {};
