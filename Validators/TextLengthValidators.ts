export function isInValidationBounds(textLength: number, bounds: { min?: number; max?: number; }) {
    const min = bounds.min ?? 0;
    if (bounds.max === undefined) {
        return min <= textLength;
    }
    return min <= textLength && textLength <= bounds.max;
}


export function assertValidModFlagTextLength(flagDetailLength: number): boolean {
    const bounds = {min: 10, max: 500};
    if (!isInValidationBounds(flagDetailLength, bounds)) {
        throw new Error(`Mod flag text must be between ${bounds.min} and ${bounds.max} characters.`);
    }
    return true;
}

export function assertValidPlagiarismFlagTextLengths(sourceLength: number, explanationLength: number): boolean {
    const sourceBounds = {min: 10};
    const explanationBounds = {min: 10, max: 500};
    if (!isInValidationBounds(sourceLength, sourceBounds)) {
        throw new Error(`Plagiarism flag source must be more than ${sourceBounds.min} characters.`);
    }
    if (!isInValidationBounds(explanationLength, explanationBounds)) {
        throw new Error(`Plagiarism flag explanation text must be between ${explanationBounds.min} and ${explanationBounds.max} characters.`);
    }
    return true;
}

export function assertValidCommentTextLength(commentLength: number): boolean {
    const bounds = {min: 15, max: 600};
    if (!isInValidationBounds(commentLength, bounds)) {
        throw new Error(`Comment text must be between ${bounds.min} and ${bounds.max} characters.`);
    }
    return true;
}