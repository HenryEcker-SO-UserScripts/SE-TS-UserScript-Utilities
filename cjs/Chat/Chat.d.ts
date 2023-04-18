import { type IdType } from '../Utilities/Types';
export interface SendChatMessageResponse {
    id: number;
    time: number;
}
export declare function sendChatMessage(roomId: IdType, messageText: string, chatFkey: string): Promise<SendChatMessageResponse>;
export declare function editChatMessage(messageId: string | number, updatedText: string, chatFkey: string): Promise<"ok">;
export declare function deleteChatMessage(messageId: string | number, chatFkey: string): Promise<"ok" | "This message has already been deleted.">;
