import {IdType} from "../Utilities/Types";
import {fetchPostFormData} from "../Utilities/General";

// Currently relying on 200 status code since it sometimes returns an HTML response and sometimes JSON
// Depending on if the CM escalate message was displayed or not.
// export interface PostDeleteAsPlagiarismResponse {
//     success: boolean;
//     message: string;
// }
export function deleteAsPlagiarism(postId: IdType) {
    return fetchPostFormData(
        `/admin/posts/${postId}/delete-as-plagiarism`,
        {
            fkey: StackExchange.options.user.fkey
        }
    );
}