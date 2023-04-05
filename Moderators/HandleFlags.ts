import {type IdType} from '../Utilities/Types';

export interface PostDeleteAsPlagiarismResponse {
    success: boolean;
    message: string;
}

export function deleteAsPlagiarism(postId: IdType): Promise<PostDeleteAsPlagiarismResponse> {
    return new Promise((resolve, reject) => {
        void $.ajax({
            type: 'POST',
            url: `/admin/posts/${postId}/delete-as-plagiarism`,
            data: {
                fkey: StackExchange.options.user.fkey
            },
            success: (json) => {
                resolve(json);
            },
            error: (res) => {
                reject(res);
            }
        });
    });
}