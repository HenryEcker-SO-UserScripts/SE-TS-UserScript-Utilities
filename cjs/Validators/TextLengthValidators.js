"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertValidDeleteUserReasonDetailTextLength = exports.deleteUserReasonDetailBounds = exports.assertValidAnnotationTextLength = exports.annotationTextLengthBounds = exports.assertValidCommentTextLength = exports.commentTextLengthBounds = exports.assertValidPlagiarismFlagTextLengths = exports.plagiarismFlagLengthBounds = exports.assertValidModFlagTextLength = exports.modFlagTextLengthBounds = exports.isInValidationBounds = void 0;
function isInValidationBounds(textLength, bounds) {
    const min = bounds.min ?? 0;
    if (bounds.max === undefined) {
        return min <= textLength;
    }
    return min <= textLength && textLength <= bounds.max;
}
exports.isInValidationBounds = isInValidationBounds;
exports.modFlagTextLengthBounds = { min: 10, max: 500 };
function assertValidModFlagTextLength(flagDetailLength) {
    if (!isInValidationBounds(flagDetailLength, exports.modFlagTextLengthBounds)) {
        throw new Error(`Mod flag text must be between ${exports.modFlagTextLengthBounds.min} and ${exports.modFlagTextLengthBounds.max} characters.`);
    }
    return true;
}
exports.assertValidModFlagTextLength = assertValidModFlagTextLength;
exports.plagiarismFlagLengthBounds = {
    source: { min: 10 },
    explanation: { min: 10, max: 500 }
};
function assertValidPlagiarismFlagTextLengths(sourceLength, explanationLength) {
    if (!isInValidationBounds(sourceLength, exports.plagiarismFlagLengthBounds.source)) {
        throw new Error(`Plagiarism flag source must be more than ${exports.plagiarismFlagLengthBounds.source.min} characters.`);
    }
    if (!isInValidationBounds(explanationLength, exports.plagiarismFlagLengthBounds.explanation)) {
        throw new Error(`Plagiarism flag explanation text must be between ${exports.plagiarismFlagLengthBounds.explanation.min} and ${exports.plagiarismFlagLengthBounds.explanation.max} characters.`);
    }
    return true;
}
exports.assertValidPlagiarismFlagTextLengths = assertValidPlagiarismFlagTextLengths;
exports.commentTextLengthBounds = { min: 15, max: 600 };
function assertValidCommentTextLength(commentLength) {
    if (!isInValidationBounds(commentLength, exports.commentTextLengthBounds)) {
        throw new Error(`Comment text must be between ${exports.commentTextLengthBounds.min} and ${exports.commentTextLengthBounds.max} characters.`);
    }
    return true;
}
exports.assertValidCommentTextLength = assertValidCommentTextLength;
exports.annotationTextLengthBounds = { min: 10, max: 300 };
function assertValidAnnotationTextLength(annotationLength) {
    if (!isInValidationBounds(annotationLength, exports.annotationTextLengthBounds)) {
        throw new Error(`Annotation text must be between ${exports.annotationTextLengthBounds.min} and ${exports.annotationTextLengthBounds.max} characters.`);
    }
    return true;
}
exports.assertValidAnnotationTextLength = assertValidAnnotationTextLength;
exports.deleteUserReasonDetailBounds = { min: 15, max: 600 };
function assertValidDeleteUserReasonDetailTextLength(deleteReasonDetailLength) {
    if (!isInValidationBounds(deleteReasonDetailLength, exports.deleteUserReasonDetailBounds)) {
        throw new Error(`Delete user reason detail text must be between ${exports.deleteUserReasonDetailBounds.min} and ${exports.deleteUserReasonDetailBounds.max} characters.`);
    }
    return true;
}
exports.assertValidDeleteUserReasonDetailTextLength = assertValidDeleteUserReasonDetailTextLength;
//# sourceMappingURL=TextLengthValidators.js.map