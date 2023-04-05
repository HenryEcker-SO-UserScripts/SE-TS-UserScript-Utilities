import type {IdType} from '../Utilities/Types';
import {ajaxPostWithData} from '../Utilities/General';


type LockTypeId = (
    20 | // Content Dispute
    21 | // Comment Only Lock
    22 | // Historical Lock
    23 | // Wiki Lock
    28); // Obsolete Lock


export interface LockPostResponse {
    success: boolean;
    affectedPostIds: number[];
}

export function lockPost(postId: IdType, lockId: LockTypeId, durationInHours = 24) {
    // duration -1 can be used to permanently lock the post
    return ajaxPostWithData<LockPostResponse>(
        `/admin/posts/${postId}/lock`,
        {
            'mod-actions': 'lock',
            noticetype: lockId,
            duration: durationInHours,
            fkey: StackExchange.options.user.fkey
        }
    );
}

export function unlockPost(postId: IdType) {
    return ajaxPostWithData<LockPostResponse>(
        `/admin/posts/${postId}/unlock`,
        {
            'mod-actions': 'unlock',
            fkey: StackExchange.options.user.fkey
        }
    );
}