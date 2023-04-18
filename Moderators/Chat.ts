import {ajaxPostWithData} from '../Utilities/General';


export function purgeChatMessageHistory(messageId: string | number, chatFkey: string) {
    return ajaxPostWithData<'ok'>(`/messages/${messageId}/purge-history`, {
        'fkey': chatFkey
    });
}