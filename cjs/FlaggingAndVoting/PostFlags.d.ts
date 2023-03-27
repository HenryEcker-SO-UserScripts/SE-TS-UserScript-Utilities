import { type IdType } from '../Utilities/Types';
export declare function reopenQuestion(postId: IdType): Promise<unknown>;
export declare function flagSpam(postId: IdType): Promise<import("./Helpers").FlagResponse>;
export declare function flagRudeOrAbusive(postId: IdType): Promise<import("./Helpers").FlagResponse>;
export declare function flagPlagiarizedContent(postId: IdType, originalSource: string, detailText: string): Promise<import("./Helpers").FlagResponse>;
export declare function flagVeryLowQuality(postId: IdType): Promise<import("./Helpers").FlagResponse>;
export declare function flagInNeedOfModeratorIntervention(postId: IdType, detailText: string): Promise<import("./Helpers").FlagResponse>;
