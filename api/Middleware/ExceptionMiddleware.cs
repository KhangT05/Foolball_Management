// using System.Net;
// using Football_Management.API.Common;
// using Football_Management.API.Common.Exceptions;

// namespace Football_Management.API.Middleware;

// public class ExceptionMiddleware
// {
//     private readonly RequestDelegate _next;
//     private readonly ILogger<ExceptionMiddleware> _logger;
//     public ExceptionMiddleware(
//         RequestDelegate next,
//         ILogger<ExceptionMiddleware> logger
//     )
//     {
//         _next = next;
//         _logger = logger;
//     }
//     public async Task InvokeAsync(HttpContext context)
//     {
//         try
//         {
//             await _next(context);
//         }
//         catch (Exception ex)
//         {
//             await HandleAsync(context, ex);
//         }
//     }
//     private async Task HandleAsync(HttpContext context, Exception ex)
//     {
//         APIResponse<object> response;
//         int statusCode;

//         if (ex is AppException appEx)
//         {
//             _logger.LogWarning("AppException [{Code}] {Path}: {Msg}",
//                 (int)appEx.StatusCode, context.Request.Path, appEx.Message);

//             response = appEx.ToResponse();
//             statusCode = (int)appEx.StatusCode;
//         }
//         else
//         {
//             _logger.LogError(ex, "Unhandled: {Path}", context.Request.Path);

//             response = APIResponse<object>.Fail(null, "Đã xảy ra lỗi hệ thống.",
//                              HttpStatusCode.InternalServerError);
//             statusCode = 500;
//         }

//         context.Response.ContentType = "application/json";
//         context.Response.StatusCode = statusCode;
//         await context.Response.WriteAsJsonAsync(response);
//     }
// }