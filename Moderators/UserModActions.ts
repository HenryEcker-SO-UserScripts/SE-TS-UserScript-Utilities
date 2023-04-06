import type {IdType} from '../Utilities/Types';
import {ajaxPostWithData} from '../Utilities/General';

export function getUserPii(userId: IdType): Promise<{
    email: string;
    name: string;
    ip: string;
}> {
    return ajaxPostWithData<string>(
        '/admin/all-pii',
        {id: userId, fkey: StackExchange.options.user.fkey}
    ).then(resText => {
        const html = $(resText);
        return {
            email: (html[1].children[1] as HTMLElement).innerText.trim(),
            name: (html[1].children[3] as HTMLElement).innerText.trim(),
            ip: (html[3].children[1] as HTMLElement).innerText.trim()
        };
    });
}

export type DeleteReason = (
    'This user was created to circumvent system or moderator imposed restrictions and continues to contribute poorly' |
    'This user is no longer welcome to participate on the site'
    );

export function deleteUser(userId: IdType, deleteReason: DeleteReason, deleteReasonDetails: string) {
    return ajaxPostWithData(
        `/admin/users/${userId}/delete`,
        {
            fkey: StackExchange.options.user.fkey,
            deleteReason: deleteReason,
            deleteReasonDetails: deleteReasonDetails
        },
        false
    );
}

export function annotateUser(userId: IdType, annotationDetails: string) {
    return ajaxPostWithData(
        `/admin/users/${userId}/annotate`,
        {
            fkey: StackExchange.options.user.fkey,
            annotation: annotationDetails
        },
        false
    );
}