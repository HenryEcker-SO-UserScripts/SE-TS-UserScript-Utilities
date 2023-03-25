import {type IdType} from '../Utilities/Types';
import {castPostsVote} from './Helpers';


export function deletePost(postId: IdType) {
    return castPostsVote(postId, 10);
}

export function undeletePost(postId: IdType) {
    return castPostsVote(postId, 11);
}