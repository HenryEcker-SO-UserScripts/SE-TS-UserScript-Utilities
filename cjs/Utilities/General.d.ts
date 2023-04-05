export declare function runVoidOnce(fn: (...args: unknown[]) => void): (...args: unknown[]) => void;
export declare function ajaxPostWithData<T>(endPoint: string, data: Record<string, unknown>): Promise<T>;
export declare function ajaxPostWithDataStatusOnly(endPoint: string, data: Record<string, unknown>): Promise<{
    status: number;
    statusText: string;
}>;
