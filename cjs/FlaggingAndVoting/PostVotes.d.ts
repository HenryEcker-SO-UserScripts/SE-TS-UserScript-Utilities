import { type IdType } from '../Utilities/Types';
export declare function deletePost(postId: IdType): Promise<import("./Helpers").VoteResponse>;
export declare function undeletePost(postId: IdType): Promise<import("./Helpers").VoteResponse>;
export declare function getVoteCounts(postId: IdType): Promise<{
    down: string;
    up: string;
}>;
