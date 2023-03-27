import type { IdType } from '../Utilities/Types';
interface EditTagResponse {
    success: boolean;
    html: string;
}
export declare function editTags(postId: IdType, tags: string, reviewTaskId?: IdType): Promise<EditTagResponse>;
interface PostEditResponse {
    html: string;
    message: 'ok';
    redirectTo: string;
    success: boolean;
    title: string;
}
export declare function editPost(postId: IdType, revisionGuid: string, title: string, postText: string, tags: string, editComment: string, isCurrent?: boolean, author?: string): Promise<PostEditResponse>;
interface PostEditorHeartbeatResponse {
    'draftSaved': boolean;
    'disableEditor': boolean;
    'breakoutSimilarQuestions': boolean;
}
export declare function postEditorHeartbeat(postId: IdType, clientRevisionGuid: string): Promise<PostEditorHeartbeatResponse>;
interface ValidateResponse {
    errors: object;
    source: object;
    success: boolean;
    warnings: object;
}
export declare function validatePostBody(body: string, oldBody: string, isQuestion: boolean, isSuggestedEdit?: boolean): Promise<ValidateResponse>;
export declare function validatePostTitle(title: string): Promise<ValidateResponse>;
export declare function validatePostTags(tags: string, oldTags: string, postTypeId?: number): Promise<ValidateResponse>;
export declare function isSuggestedEditQueueFull(postId: IdType): Promise<boolean>;
export declare function discardQuestionDraft(): Promise<{
    success: boolean;
}>;
export {};
