export function isInValidationBounds(textLength: number, bounds: { min?: number; max?: number; }) {
    const min = bounds.min ?? 0;
    if (bounds.max === undefined) {
        return min <= textLength;
    }
    return min <= textLength && textLength <= bounds.max;
}


export const modFlagTextLengthBounds = {min: 10, max: 500};

export function assertValidModFlagTextLength(flagDetailLength: number): boolean {
    if (!isInValidationBounds(flagDetailLength, modFlagTextLengthBounds)) {
        throw new Error(`Mod flag text must be between ${modFlagTextLengthBounds.min} and ${modFlagTextLengthBounds.max} characters.`);
    }
    return true;
}

export const plagiarismFlagLengthBounds = {
    source: {min: 10},
    explanation: {min: 10, max: 500}
};

export function assertValidPlagiarismFlagTextLengths(sourceLength: number, explanationLength: number): boolean {
    if (!isInValidationBounds(sourceLength, plagiarismFlagLengthBounds.source)) {
        throw new Error(`Plagiarism flag source must be more than ${plagiarismFlagLengthBounds.source.min} characters.`);
    }
    if (!isInValidationBounds(explanationLength, plagiarismFlagLengthBounds.explanation)) {
        throw new Error(`Plagiarism flag explanation text must be between ${plagiarismFlagLengthBounds.explanation.min} and ${plagiarismFlagLengthBounds.explanation.max} characters.`);
    }
    return true;
}

export const commentTextLengthBounds = {min: 15, max: 600};

export function assertValidCommentTextLength(commentLength: number): boolean {
    if (!isInValidationBounds(commentLength, commentTextLengthBounds)) {
        throw new Error(`Comment text must be between ${commentTextLengthBounds.min} and ${commentTextLengthBounds.max} characters.`);
    }
    return true;
}