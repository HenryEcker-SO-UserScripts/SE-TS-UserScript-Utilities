import type { IdType } from '../Utilities/Types';
type LockTypeId = (20 | // Content Dispute
21 | // Comment Only Lock
22 | // Historical Lock
23 | // Wiki Lock
28);
export declare function lockPost(postId: IdType, lockId: LockTypeId, durationInHours?: number): Promise<unknown>;
export declare function unlockPost(postId: IdType): Promise<unknown>;
export {};
