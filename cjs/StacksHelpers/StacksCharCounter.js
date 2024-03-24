"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureCharCounter = void 0;
function configureCharCounter($jTextarea, populateText, charCounterOptions) {
    if (charCounterOptions.target === undefined) {
        charCounterOptions.target = $jTextarea.parent().find('span.text-counter');
    }
    $jTextarea
        .val(populateText)
        .charCounter(charCounterOptions)
        .trigger('charCounterUpdate');
}
exports.configureCharCounter = configureCharCounter;
//# sourceMappingURL=StacksCharCounter.js.map