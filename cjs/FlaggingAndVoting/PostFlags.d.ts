import { type IdType } from '../Utilities/Types';
import { type FlagResponse } from './Helpers';
export declare function reopenQuestion(postId: IdType): Promise<FlagResponse>;
export declare function flagSpam(postId: IdType): Promise<FlagResponse>;
export declare function flagRudeOrAbusive(postId: IdType): Promise<FlagResponse>;
export declare function flagPlagiarizedContent(postId: IdType, originalSource: string, detailText: string): Promise<FlagResponse>;
export declare function flagVeryLowQuality(postId: IdType): Promise<FlagResponse>;
export declare function flagInNeedOfModeratorIntervention(postId: IdType, detailText: string): Promise<FlagResponse>;
