"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purgeChatMessageHistory = void 0;
const General_1 = require("../Utilities/General");
function purgeChatMessageHistory(messageId, chatFkey) {
    return (0, General_1.ajaxPostWithData)(`/messages/${messageId}/purge-history`, {
        'fkey': chatFkey
    });
}
exports.purgeChatMessageHistory = purgeChatMessageHistory;
//# sourceMappingURL=Chat.js.map