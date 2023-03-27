export function removeModalFromDOM(modalId: string) {
    const existingModal = document.getElementById(modalId);
    if (existingModal !== null) {
        Stacks.hideModal(existingModal);
        setTimeout(() => {
            existingModal.remove();
        }, 125);
    }
}