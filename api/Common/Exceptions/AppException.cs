using System.Net;

namespace DoAnTotNghiep.API.Common.Exceptions;

public class AppException : Exception
{
    public HttpStatusCode StatusCode { get; }
    public object? Error { get; }
    public AppException(
        string message,
        HttpStatusCode statusCode = HttpStatusCode.BadRequest,
        object? error = null
    ) : base(message)
    {
        Error = error;
        StatusCode = statusCode;
    }
    public APIResponse<object> ToResponse()
        => APIResponse<object>.Fail(Error, Message, StatusCode);
}
public class NotFoundException : AppException { public NotFoundException(string resource) : base($"{resource} không tồn tại.", HttpStatusCode.NotFound) { } }
public class ConflictException : AppException { public ConflictException(string message) : base(message, HttpStatusCode.Conflict) { } }
public class ForbiddenException : AppException { public ForbiddenException(string message = "Bạn không có quyền thực hiện.") : base(message, HttpStatusCode.Forbidden) { } }
public class UnauthorizedException : AppException { public UnauthorizedException(string message = "Chưa xác thực.") : base(message, HttpStatusCode.Unauthorized) { } }
public class BadRequestException : AppException { public BadRequestException(string message) : base(message, HttpStatusCode.BadRequest) { } }