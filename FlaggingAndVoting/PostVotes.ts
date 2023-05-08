import {type IdType} from '../Utilities/Types';
import {castPostsVote} from './Helpers';
import {ajaxGet} from '../Utilities/General';


export function deletePost(postId: IdType) {
    return castPostsVote(postId, 10);
}

export function undeletePost(postId: IdType) {
    return castPostsVote(postId, 11);
}

export function getVoteCounts(postId: IdType) {
    return ajaxGet<{ down: string; up: string; }>(`/posts/${postId}/vote-counts`);
}