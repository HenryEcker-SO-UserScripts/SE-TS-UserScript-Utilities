export declare function isInValidationBounds(textLength: number, bounds: {
    min?: number;
    max?: number;
}): boolean;
export declare const modFlagTextLengthBounds: {
    min: number;
    max: number;
};
export declare function assertValidModFlagTextLength(flagDetailLength: number): boolean;
export declare const plagiarismFlagLengthBounds: {
    source: {
        min: number;
    };
    explanation: {
        min: number;
        max: number;
    };
};
export declare function assertValidPlagiarismFlagTextLengths(sourceLength: number, explanationLength: number): boolean;
export declare const commentTextLengthBounds: {
    min: number;
    max: number;
};
export declare function assertValidCommentTextLength(commentLength: number): boolean;
