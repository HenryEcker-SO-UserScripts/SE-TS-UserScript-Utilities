export declare function runVoidOnce(fn: (...args: unknown[]) => void): (...args: unknown[]) => void;
export interface StatusOnlyResponse {
    status: number;
    statusText: string;
}
/**
 * if shouldReturnData is false we just return the status and status text,
 * otherwise we need to specify the type of information being returned (T)
 */
export declare function ajaxPostWithData(endPoint: string, data: Record<string, unknown>, shouldReturnData?: false): Promise<StatusOnlyResponse>;
export declare function ajaxPostWithData<T>(endPoint: string, data: Record<string, unknown>, shouldReturnData?: true): Promise<T>;
