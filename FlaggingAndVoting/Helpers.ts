import {IdType} from "../Utilities/Types";
import {fetchPostFormData, fetchPostFormDataBodyJsonResponse} from "../Utilities/General";

interface FlagResponse {
    FlagType: number;
    Message: string;
    Outcome: number;
    ResultChangedState: boolean;
    Success: boolean;
}

type PostFlagType =
    'PostSpam'
    | 'PostOffensive'
    | 'PlagiarizedContent'
    | 'AnswerNotAnAnswer'
    | 'PostOther'
    | 'PostLowQuality';


export function flagPost(flagType: PostFlagType, postId: IdType, otherText?: undefined | null | string, overrideWarning?: boolean, customData?: null | Record<string, unknown>) {
    const data: Record<string, unknown> = {
        fkey: StackExchange.options.user.fkey,
        otherText: otherText ?? ''
    };
    if (overrideWarning !== undefined) {
        data['overrideWarning'] = overrideWarning;
    }
    if (customData !== undefined) {
        data['customData'] = JSON.stringify(customData);
    }

    return fetchPostFormDataBodyJsonResponse<FlagResponse>(
        `/flags/posts/${postId}/add/${flagType}`,
        data
    );
}


export function castPostsVote(postId: IdType, voteType: 10 | 11) {
    return fetchPostFormData(
        `/posts/${postId}/vote/${voteType}`,
        {
            fkey: StackExchange.options.user.fkey
        }
    );
}