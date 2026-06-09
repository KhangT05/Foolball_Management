export interface ApiResponseShape<T = null> {
    status: boolean;
    message: string;
    data: T | null;
    timestamp: string;
}
export declare function makeResponse<T>(data: T | null, message: string): ApiResponseShape<T>;
//# sourceMappingURL=api.response.d.ts.map