import type {IdType} from '../Utilities/Types';
import {ajaxPostWithData} from '../Utilities/General';


/**
 * affectedPostIds will normally return an array of length 1,
 *                 but in the case of Historical, Obsolete locks on questions
 *                 it will also lock the associated answers and return the values
 */
export interface NoticeLockPostResponse {
    success: boolean;
    affectedPostIds: number[];
}


type NoticeTypeId = (
    1 | // Needs citation
    2 | // Current Event
    3); // Needs detailed answers


export function addPostNotice(postId: IdType, noticeId: NoticeTypeId) {
    return ajaxPostWithData<NoticeLockPostResponse>(
        `/admin/posts/${postId}/add-post-notice`,
        {
            noticetype: noticeId,
            fkey: StackExchange.options.user.fkey
        }
    );
}

export function removePostNotice(postId: IdType) {
    return ajaxPostWithData<NoticeLockPostResponse>(
        `/admin/posts/${postId}/remove-post-notice`,
        {
            fkey: StackExchange.options.user.fkey
        }
    );
}


type LockTypeId = (
    20 | // Content Dispute
    21 | // Comment Only Lock
    22 | // Historical Lock
    23 | // Wiki Lock
    28); // Obsolete Lock

export function lockPost(postId: IdType, lockId: LockTypeId, durationInHours = 24) {
    // duration -1 can be used to permanently lock the post
    return ajaxPostWithData<NoticeLockPostResponse>(
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
    return ajaxPostWithData<NoticeLockPostResponse>(
        `/admin/posts/${postId}/unlock`,
        {
            'mod-actions': 'unlock',
            fkey: StackExchange.options.user.fkey
        }
    );
}