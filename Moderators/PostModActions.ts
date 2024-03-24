import type {IdType} from '../Utilities/Types';
import {ajaxPostWithData} from '../Utilities/General';


export function mergeQuestion(mergeSourceId: IdType, masterQuestionIdOrUrl: string | number) {
    // Returns an HTML Response
    return ajaxPostWithData<string>(
        `/admin/posts/${mergeSourceId}/merge`,
        {
            fkey: StackExchange.options.user.fkey,
            masterQuestionIdOrUrl: masterQuestionIdOrUrl // Either the question Id or URL of the question
        }
    );
}