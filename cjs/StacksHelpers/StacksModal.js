"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableSubmitButtonAndToastErrors = exports.removeModalFromDOM = void 0;
const ErrorHandling_1 = require("../Utilities/ErrorHandling");
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
async function disableSubmitButtonAndToastErrors($jSubmitButton, handleActions) {
    $jSubmitButton
        .prop('disabled', true)
        .addClass('is-loading');
    try {
        await handleActions();
    }
    catch (error) {
        StackExchange.helpers.showToast((0, ErrorHandling_1.getMessageFromCaughtElement)(error), { type: 'danger' });
    }
    finally {
        $jSubmitButton
            .prop('disabled', false)
            .removeClass('is-loading');
    }
}
exports.disableSubmitButtonAndToastErrors = disableSubmitButtonAndToastErrors;
//# sourceMappingURL=StacksModal.js.map