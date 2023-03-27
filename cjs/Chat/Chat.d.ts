import { type IdType } from '../Utilities/Types';
export declare function sendChatMessage(roomId: IdType, messageText: string, chatFkey: string): Promise<Response>;
export declare function deleteChatMessage(messageId: IdType, chatFkey: string): Promise<Response>;
