import {type IdType} from '../Utilities/Types';
import {ajaxPostWithData} from '../Utilities/General';

export interface PostDeleteAsPlagiarismResponse {
    success: boolean;
    message: string;
}

export function deleteAsPlagiarism(postId: IdType) {
    return ajaxPostWithData<PostDeleteAsPlagiarismResponse>(`/admin/posts/${postId}/delete-as-plagiarism`, {
        fkey: StackExchange.options.user.fkey
    });
}