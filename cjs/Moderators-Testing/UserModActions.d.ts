import { type DeleteReason } from '../Moderators/UserModActions';
export declare function getUserPii(userId: number | string): Promise<{
    email: string;
    name: string;
    ip: string;
}>;
export declare function deleteUser(userId: number | string, deleteReason: DeleteReason, deleteReasonDetails: string): Promise<{
    status: number;
}>;
export declare function annotateUser(userId: number | string, annotationDetails: string): Promise<{
    status: number;
}>;
