export declare const REFRESH_TTL_SEC: number;
export interface RefreshSession {
    user_id: number;
    csrfToken: string;
}
export declare const sessionStore: {
    set(uuid: string, session: RefreshSession): Promise<void>;
    get(uuid: string): Promise<RefreshSession | null>;
    del(uuid: string): Promise<void>;
};
//# sourceMappingURL=session.d.ts.map