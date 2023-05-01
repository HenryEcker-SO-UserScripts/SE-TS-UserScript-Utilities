import {type IdType} from '../Utilities/Types';
import {ajaxPostWithData} from '../Utilities/General';
import {type FlagResponse} from './Helpers';

export function reopenQuestion(postId: IdType) {
    return ajaxPostWithData<FlagResponse>(
        `/flags/questions/${postId}/reopen/add`,
        {
            fkey: StackExchange.options.user.fkey
        }
    );
}

interface CloseAsDuplicateConfig extends Record<string, unknown> {
    fkey: string;
    closeReasonId: 'Duplicate';
    duplicateOfQuestionId: IdType;
    siteSpecificOtherText?: string;
    originalSiteSpecificOtherText?: string;
}

export function closeQuestionAsDuplicate(postId: IdType, dupeTargetId: IdType) {
    return ajaxPostWithData<FlagResponse>(
        `/flags/questions/${postId}/close/add`,
        {
            fkey: StackExchange.options.user.fkey,
            closeReasonId: 'Duplicate',
            duplicateOfQuestionId: dupeTargetId
        } satisfies CloseAsDuplicateConfig
    );
}
