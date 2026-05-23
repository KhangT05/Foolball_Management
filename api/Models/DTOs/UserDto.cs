using Football_Management.API.Models.DTOs.Base;

namespace Football_Management.API.Models.DTOs;

public class UserDto : BaseDto
{
    public required string Email { get; set; }
    public required string Name { get; set; }
    public string? Phone { get; set; }
}

public class CreateUpdateUserDto
{
    public string Email { get; set; }
    public string Name { get; set; }
    public string Password { get; set; }
    public string? Phone { get; set; }
}