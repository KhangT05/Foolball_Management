using Football_Management.API.Models.DTOs.Base;

namespace Football_Management.API.Models.DTOs;

public class RoleDto : BaseDto
{
    public required string Name { get; set; }
    public string Description { get; set; }
}

public class CreateUpdateRoleDto : BaseDto
{
    public required string Name { get; set; }
    public string Description { get; set; }
}
