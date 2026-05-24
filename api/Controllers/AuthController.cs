using System.Security.Claims;
using Football_Management.API.Common.Exceptions;
using Football_Management.API.Models.DTOs;
using Football_Management.API.Services.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Football_Management.API.Controllers;

[Route("api/v1/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] AuthLoginRequest request)
    {
        var ip = HttpContext.Connection.RemoteIpAddress?.ToString();
        var result = await _authService.LoginAsync(request, ip);

        SetRefreshTokenCookie(result.RefreshToken);

        return Ok(new
        {
            result.AccessToken,
            result.CsrfToken,
            result.ExpiresAt
        });
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] AuthRegisterRequest request)
    {
        var ip = HttpContext.Connection.RemoteIpAddress?.ToString();
        var result = await _authService.RegisterAsync(request, ip);

        SetRefreshTokenCookie(result.RefreshToken);

        return StatusCode(201, new
        {
            result.AccessToken,
            result.CsrfToken,
            result.ExpiresAt
        });
    }

    [AllowAnonymous]
    [HttpPost("refresh")]
    public async Task<IActionResult> Refresh([FromHeader(Name = "X-CSRF-TOKEN")] string csrfToken)
    {
        var refreshToken = Request.Cookies["refresh_token"]
            ?? throw new UnauthorizedException("Refresh token không tồn tại.");

        var ip = HttpContext.Connection.RemoteIpAddress?.ToString();
        var result = await _authService.RefreshAsync(refreshToken, csrfToken, ip);

        SetRefreshTokenCookie(result.RefreshToken);

        return Ok(new
        {
            result.AccessToken,
            result.CsrfToken,
            result.ExpiresAt
        });
    }

    [Authorize]
    [HttpPost("revoke")]
    public async Task<IActionResult> Revoke()
    {
        var refreshToken = Request.Cookies["refresh_token"];
        if (refreshToken is not null)
        {
            await _authService.RevokeAsync(refreshToken);
        }

        Response.Cookies.Delete("refresh_token");
        return NoContent();
    }

    [Authorize]
    [HttpGet("me")]
    public async Task<IActionResult> Me()
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
        var result = await _authService.GetMeAsync(userId);
        return Ok(result);
    }

    // ── Private ───────────────────────────────────────────────────

    private void SetRefreshTokenCookie(string token)
    {
        Response.Cookies.Append("refresh_token", token, new CookieOptions
        {
            HttpOnly = true,
            SameSite = SameSiteMode.Lax,
            Expires = DateTimeOffset.UtcNow.AddDays(7)
        });
    }
}