using System.Diagnostics;
using System.Net;
using System.Text.Json;
using Football_Management.API.Common.Exceptions;
namespace Football_Management.API.Middleware;

public class ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext context)
    {
        var sw = Stopwatch.StartNew();
        try
        {
            await next(context);
            sw.Stop();
            logger.LogInformation("{Method} {Path} {StatusCode} {Elapsed}ms",
                context.Request.Method,
                context.Request.Path,
                context.Response.StatusCode,
                sw.ElapsedMilliseconds);
        }
        catch (AppException ex)
        {
            sw.Stop();
            logger.LogWarning("{Method} {Path} {StatusCode} {Elapsed}ms — {Message}",
                context.Request.Method,
                context.Request.Path,
                (int)ex.StatusCode,
                sw.ElapsedMilliseconds,
                ex.Message);

            var (statusCode, message) = ex.StatusCode switch
            {
                HttpStatusCode.Unauthorized => (401, "Chưa xác thực."),
                _ => (403, "Không có quyền.")
            };

            await WriteAsync(context, statusCode, message);
        }
        catch (Exception ex)
        {
            sw.Stop();
            logger.LogError(ex, "{Method} {Path} 500 {Elapsed}ms",
                context.Request.Method,
                context.Request.Path,
                sw.ElapsedMilliseconds,
                ex.Message);

            await WriteAsync(context, 403, "Không có quyền.");
        }
    }

    private static Task WriteAsync(HttpContext context, int statusCode, string message)
    {
        context.Response.StatusCode = statusCode;
        context.Response.ContentType = "application/json";
        return context.Response.WriteAsync(JsonSerializer.Serialize(new
        {
            statusCode,
            message
        }));
    }
}