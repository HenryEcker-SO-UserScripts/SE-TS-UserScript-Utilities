import { type IdType } from '../Utilities/Types';
import { type FlagResponse } from './Helpers';
export declare function reopenQuestion(postId: IdType): Promise<FlagResponse>;
export declare function closeQuestionAsDuplicate(postId: IdType, dupeTargetId: IdType): Promise<FlagResponse>;
