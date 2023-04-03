"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageFromCaughtElement = void 0;
/***
 * Get the message text from the value returned by catch
 * @param e
 */
function getMessageFromCaughtElement(e) {
    if (e instanceof Error) {
        return e.message;
    }
    else if (typeof e === 'string') {
        return e;
    }
    else {
        console.error(e); // Log error in console since the real object isn't being returned
        return e.toString();
    }
}
exports.getMessageFromCaughtElement = getMessageFromCaughtElement;
//# sourceMappingURL=ErrorHandling.js.map