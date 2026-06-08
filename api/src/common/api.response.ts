export interface ApiResponseShape<T = null> {
    status: boolean;
    message: string;
    data: T | null;
    timestamp: string;
}

export function makeResponse<T>(data: T | null, message: string): ApiResponseShape<T> {
    return {
        status: true,
        message,
        data,
        timestamp: new Date().toISOString()
    };
}