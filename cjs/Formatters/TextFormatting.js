"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDetailStringFromObject = void 0;
/**
 * Creates formatted detail string with columns for delete/annotation detail text
 */
function buildDetailStringFromObject(obj, keyValueSeparator, recordSeparator, alignColumns = false) {
    const filteredObj = Object.entries(obj)
        .reduce((acc, [key, value]) => {
        if (value.length > 0) {
            acc[`${key}${keyValueSeparator}`] = value;
        }
        return acc;
    }, {});
    const getPaddingStr = (function () {
        if (alignColumns) {
            const maxLabelLength = Math.max(...Object.keys(filteredObj).map(k => k.length));
            return function (key) {
                return new Array(maxLabelLength - key.length + 1).join(' ');
            };
        }
        else {
            return function (_) {
                return '';
            };
        }
    }());
    return Object.entries(filteredObj)
        .map(([key, value]) => `${key}${getPaddingStr(key)}${value}`)
        .join(recordSeparator);
}
exports.buildDetailStringFromObject = buildDetailStringFromObject;
//# sourceMappingURL=TextFormatting.js.map