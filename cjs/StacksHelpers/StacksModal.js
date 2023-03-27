"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeModalFromDOM = void 0;
function removeModalFromDOM(modalId) {
    const existingModal = document.getElementById(modalId);
    if (existingModal !== null) {
        Stacks.hideModal(existingModal);
        setTimeout(() => {
            existingModal.remove();
        }, 125);
    }
}
exports.removeModalFromDOM = removeModalFromDOM;
//# sourceMappingURL=StacksModal.js.map