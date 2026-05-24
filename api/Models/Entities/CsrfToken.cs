namespace Football_Management.API.Models.Entities;

public class CsrfToken
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
    public string Token { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}