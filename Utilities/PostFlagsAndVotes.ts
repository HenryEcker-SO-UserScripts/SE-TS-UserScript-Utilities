import {fetchPostFormData, fetchPostFormDataBodyJsonResponse} from './General';
import type {IdType} from './Types';

export function castPostsVote(postId: IdType, voteType: IdType) {
    return fetchPostFormData(
        `/posts/${postId}/vote/${voteType}`,
        {
            fkey: StackExchange.options.user.fkey
        }
    );
}

export function reopenQuestion(postId: IdType) {
    return fetchPostFormDataBodyJsonResponse(
        `/flags/questions/${postId}/reopen/add`,
        {
            fkey: StackExchange.options.user.fkey
        }
    );
}

interface FlagResponse {
    FlagType: number;
    Message: string;
    Outcome: number;
    ResultChangedState: boolean;
    Success: boolean;
}

type PostFlagType = 'PostSpam' | 'PostOffensive' | 'PlagiarizedContent';


function flagPost(flagType: PostFlagType, postId: IdType, otherText: null | string, overrideWarning: boolean, extraInfo?: Record<string, unknown>) {
    return fetchPostFormDataBodyJsonResponse<FlagResponse>(
        `/flags/posts/${postId}/add/${flagType}`,
        {
            fkey: StackExchange.options.user.fkey,
            otherText: otherText,
            overrideWarning: overrideWarning,
            ...extraInfo
        }
    );
}

export function flagSpam(postId: IdType) {
    return flagPost('PostSpam', postId, null, true);
}

export function flagRudeOrAbusive(postId: IdType) {
    return flagPost('PostOffensive', postId, null, true);
}

export function flagPlagiarizedContent(postId: IdType, originalSource: string, detailText: string) {
    return flagPost('PlagiarizedContent', postId, detailText, false, {
        customData: JSON.stringify({plagiarizedSource: originalSource})
    });
}


// Currently relying on 200 status code since it sometimes returns an HTML response and sometimes JSON
// Depending on if the CM escalate message was displayed or not.
// export interface PostDeleteAsPlagiarismResponse {
//     success: boolean;
//     message: string;
// }

export function deleteAsPlagiarism(postId: IdType) {
    return fetchPostFormData(
        `/admin/posts/${postId}/delete-as-plagiarism`,
        {
            fkey: StackExchange.options.user.fkey
        }
    );
}
