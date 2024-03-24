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
export declare function configureCharCounter($jTextarea: JQuery<HTMLTextAreaElement>, populateText: string, charCounterOptions: CharCounterOptions): void;
