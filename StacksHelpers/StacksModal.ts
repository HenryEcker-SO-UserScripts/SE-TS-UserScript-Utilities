import {getMessageFromCaughtElement} from '../Utilities/ErrorHandling';

export function removeModalFromDOM(modalId: string) {
    const existingModal = document.getElementById(modalId);
    if (existingModal !== null) {
        Stacks.hideModal(existingModal);
        setTimeout(() => {
            existingModal.remove();
        }, 125);
    }
}


export async function disableSubmitButtonAndToastErrors($jSubmitButton: JQuery, handleActions: () => Promise<void>) {
    $jSubmitButton
        .prop('disabled', true)
        .addClass('is-loading');
    try {
        await handleActions();
    } catch (error) {
        StackExchange.helpers.showToast(getMessageFromCaughtElement(error), {type: 'danger'});
    } finally {
        $jSubmitButton
            .prop('disabled', false)
            .removeClass('is-loading');
    }
}