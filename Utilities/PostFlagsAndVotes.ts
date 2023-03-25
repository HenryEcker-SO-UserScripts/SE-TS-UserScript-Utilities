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


interface FlagPlagiarismResponse {
    FlagType: number;
    Message: string;
    Outcome: number;
    ResultChangedState: boolean;
    Success: boolean;
}

export function flagPlagiarizedContent(postId: IdType, originalSource: string, detailText: string) {
    return fetchPostFormDataBodyJsonResponse<FlagPlagiarismResponse>(
        `/flags/posts/${postId}/add/PlagiarizedContent`,
        {
            fkey: StackExchange.options.user.fkey,
            otherText: detailText,
            customData: JSON.stringify({plagiarizedSource: originalSource}),
            overrideWarning: false
        }
    );
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
    )
}
