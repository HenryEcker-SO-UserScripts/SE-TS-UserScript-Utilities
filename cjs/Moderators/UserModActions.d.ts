import type { IdType } from '../Utilities/Types';
export declare function getUserPii(userId: IdType): Promise<{
    email: string;
    name: string;
    ip: string;
}>;
export type DeleteReason = ('This user was created to circumvent system or moderator imposed restrictions and continues to contribute poorly' | 'This user is no longer welcome to participate on the site');
export declare function deleteUser(userId: IdType, deleteReason: DeleteReason, deleteReasonDetails: string): Promise<{
    status: number;
    statusText: string;
}>;
export declare function annotateUser(userId: IdType, annotationDetails: string): Promise<{
    status: number;
    statusText: string;
}>;
