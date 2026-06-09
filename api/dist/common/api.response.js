export function makeResponse(data, message) {
    return {
        status: true,
        message,
        data,
        timestamp: new Date().toISOString()
    };
}
//# sourceMappingURL=api.response.js.map