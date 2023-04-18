import {type IdType} from '../Utilities/Types';
import {ajaxPostWithData} from '../Utilities/General';


export interface SendChatMessageResponse {
    id: number;
    time: number;
}

export function sendChatMessage(roomId: IdType, messageText: string, chatFkey: string) {
    // Will respond with a 200 if successful with JSON {id: number; time: number;}
    // Will respond with a 409 if rate limited. The response message is plaintext not JSON
    return ajaxPostWithData<SendChatMessageResponse>(`/chats/${roomId}/messages/new`, {
        'text': messageText,
        'fkey': chatFkey
    });
}

export function editChatMessage(messageId: string | number, updatedText: string, chatFkey: string) {
    return ajaxPostWithData<'ok'>(`/messages/${messageId}`, {
        'text': updatedText,
        'fkey': chatFkey
    });
}

export function deleteChatMessage(messageId: string | number, chatFkey: string) {
    // Will respond with a 200 if successful and text "ok"
    // Will respond with a 200 if already deleted text "This message has already been deleted."
    return ajaxPostWithData<'ok' | 'This message has already been deleted.'>(`/messages/${messageId}/delete`, {
        'fkey': chatFkey
    });
}