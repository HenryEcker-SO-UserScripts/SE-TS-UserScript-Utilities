import { type IdType } from '../Utilities/Types';
export interface PostDeleteAsPlagiarismResponse {
    success: boolean;
    message: string;
}
export declare function deleteAsPlagiarism(postId: IdType): Promise<PostDeleteAsPlagiarismResponse>;
