import {type IdType} from '../Utilities/Types';
import {ajaxPostWithData} from '../Utilities/General';

export interface FlagResponse {
    FlagType: number;
    Message: string;
    Outcome: number;
    ResultChangedState: boolean;
    Success: boolean;
}

export type PostFlagType =
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

    return ajaxPostWithData<FlagResponse>(
        `/flags/posts/${postId}/add/${flagType}`,
        data
    );
}

export interface VoteResponse {
    Success: boolean;
    Reason: number;
    Warning: boolean;
    NewScore: number;
    Message: string;
    CanOverrideMessageWithResearchPrompt: boolean;
    Refresh: boolean;
    Transient: boolean;
    Info: boolean;
    HasAcceptedByModRights: boolean;
}


export function castPostsVote(postId: IdType, voteType: 10 | 11) {
    return ajaxPostWithData<VoteResponse>(
        `/posts/${postId}/vote/${voteType}`,
        {
            fkey: StackExchange.options.user.fkey
        }
    );
}