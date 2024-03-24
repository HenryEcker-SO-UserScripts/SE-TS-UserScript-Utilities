export interface CharCounterOptions {
    min: number;
    max: number;
    setIsValid?: (b: boolean) => void;
    target?: JQuery | HTMLElement;
    startAt?: number;
}

declare global {
    interface JQuery {
        charCounter: (options: CharCounterOptions) => JQuery;
    }
}

export function configureCharCounter(
    $jTextarea: JQuery<HTMLTextAreaElement>,
    populateText: string,
    charCounterOptions: CharCounterOptions
) {
    if (charCounterOptions.target === undefined) {
        charCounterOptions.target = $jTextarea.parent().find('span.text-counter');
    }
    $jTextarea
        .val(populateText)
        .charCounter(charCounterOptions)
        .trigger('charCounterUpdate');
}