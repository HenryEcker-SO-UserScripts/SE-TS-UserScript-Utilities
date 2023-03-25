import {type IdType} from '../Utilities/Types';
import {flagPost} from './Helpers';

export function flagNotAnAnswer(postId: IdType) {
    return flagPost('AnswerNotAnAnswer', postId);
}
