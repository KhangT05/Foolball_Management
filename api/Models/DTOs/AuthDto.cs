namespace Football_Management.API.Models.DTOs;

public record AuthLoginRequest
{
    public string Email { get; set; } = default!;
    public string Password { get; set; } = default!;
}
public record AuthRegisterRequest
{
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
    public string Password { get; set; } = default!;
}
public record AuthResponse
{
    public string AccessToken { get; set; }
    public DateTime ExpiresAt { get; set; }
}