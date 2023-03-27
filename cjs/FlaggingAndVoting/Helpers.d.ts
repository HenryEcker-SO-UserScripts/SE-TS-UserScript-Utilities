import { type IdType } from '../Utilities/Types';
export interface FlagResponse {
    FlagType: number;
    Message: string;
    Outcome: number;
    ResultChangedState: boolean;
    Success: boolean;
}
export type PostFlagType = 'PostSpam' | 'PostOffensive' | 'PlagiarizedContent' | 'AnswerNotAnAnswer' | 'PostOther' | 'PostLowQuality';
export declare function flagPost(flagType: PostFlagType, postId: IdType, otherText?: undefined | null | string, overrideWarning?: boolean, customData?: null | Record<string, unknown>): Promise<FlagResponse>;
export declare function castPostsVote(postId: IdType, voteType: 10 | 11): Promise<Response>;
