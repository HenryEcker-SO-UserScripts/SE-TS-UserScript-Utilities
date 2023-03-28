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
export declare const annotationTextLengthBounds: {
    min: number;
    max: number;
};
export declare function assertValidAnnotationTextLength(annotationLength: number): boolean;
export declare const deleteUserReasonDetailBounds: {
    min: number;
    max: number;
};
export declare function assertValidDeleteUserReasonDetailTextLength(deleteReasonDetailLength: number): boolean;
