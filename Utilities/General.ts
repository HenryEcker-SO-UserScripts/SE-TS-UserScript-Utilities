export function runVoidOnce(fn: (...args: unknown[]) => void) {
    let hasRun = false;
    return function (...args: unknown[]) {
        if (hasRun === false) {
            Reflect.apply(fn, this as unknown, args);
            hasRun = true;
        }
    };
}

export interface StatusOnlyResponse {
    status: number;
    statusText: string;
}

/**
 * if shouldReturnData is false we just return the status and status text,
 * otherwise we need to specify the type of information being returned (T)
 */
export function ajaxPostWithData(endPoint: string, data: Record<string, unknown>, shouldReturnData?: false): Promise<StatusOnlyResponse>;
export function ajaxPostWithData<T>(endPoint: string, data: Record<string, unknown>, shouldReturnData?: true): Promise<T>;
export function ajaxPostWithData<T>(endPoint: string, data: Record<string, unknown>, shouldReturnData = true): Promise<T | StatusOnlyResponse> {
    return new Promise((resolve, reject) => {
        void $.ajax({
            type: 'POST',
            url: endPoint,
            data: data,
        }).done((resData: T, textStatus, xhr) => {
            resolve(
                shouldReturnData ?
                    resData :
                    {
                        status: xhr.status,
                        statusText: textStatus
                    }
            );
        }).fail((res) => {
            reject(res.responseText ?? 'An unknown error occurred');
        });
    });
}