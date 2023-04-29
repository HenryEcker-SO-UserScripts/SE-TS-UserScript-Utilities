import {type IdType} from '../Utilities/Types';
import {flagPost} from './Helpers';


export function flagSpam(postId: IdType) {
    return flagPost('PostSpam', postId, null, true);
}

export function flagRudeOrAbusive(postId: IdType) {
    return flagPost('PostOffensive', postId, null, true);
}

export function flagPlagiarizedContent(postId: IdType, originalSource: string, detailText: string) {
    return flagPost('PlagiarizedContent', postId, detailText, false, {plagiarizedSource: originalSource});
}

export function flagVeryLowQuality(postId: IdType) {
    return flagPost('PostLowQuality', postId);
}

export function flagInNeedOfModeratorIntervention(postId: IdType, detailText: string) {
    return flagPost('PostOther', postId, detailText);
}