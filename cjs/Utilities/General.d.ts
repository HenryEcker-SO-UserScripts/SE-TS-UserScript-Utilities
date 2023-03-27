export declare function runVoidOnce(fn: (...args: unknown[]) => void): (...args: unknown[]) => void;
export declare function getFormDataFromObject(obj: Record<string, unknown>): FormData;
export declare function fetchPostFormData(endPoint: string, data: Record<string, unknown>): Promise<Response>;
export declare function fetchPostFormDataBodyJsonResponse<T>(endPoint: string, data: Record<string, unknown>): Promise<T>;
