using System.Net;

namespace Football_Management.API.Common.Exceptions;

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
}
public class ForbiddenException :
AppException
{
    public ForbiddenException(string message = "Bạn không có quyền thực hiện.") :
        base(message, HttpStatusCode.Forbidden)
    { }
}
public class UnauthorizedException :
AppException
{
    public UnauthorizedException(string message = "Chưa xác thực.") :
        base(message, HttpStatusCode.Unauthorized)
    { }
}