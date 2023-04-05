export function runVoidOnce(fn: (...args: unknown[]) => void) {
    let hasRun = false;
    return function (...args: unknown[]) {
        if (hasRun === false) {
            Reflect.apply(fn, this as unknown, args);
            hasRun = true;
        }
    };
}

export function ajaxPostWithData<T>(endPoint: string, data: Record<string, unknown>): Promise<T> {
    return new Promise((resolve, reject) => {
        void $.ajax({
            type: 'POST',
            url: endPoint,
            data: data,
            success: (json) => {
                resolve(json);
            },
            error: (res) => {
                reject(res);
            }
        });
    });
}

export function ajaxPostWithDataStatusOnly(endPoint: string, data: Record<string, unknown>): Promise<{
    status: number;
    statusText: string;
}> {
    return new Promise((resolve, reject) => {
        void $.ajax({
            type: 'POST',
            url: endPoint,
            data: data,
            success: (data, textStatus, xhr) => {
                resolve({
                    status: xhr.status,
                    statusText: textStatus
                });
            },
            error: (res) => {
                reject(res);
            }
        });
    });
}