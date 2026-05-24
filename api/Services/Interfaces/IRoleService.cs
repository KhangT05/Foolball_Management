using Football_Management.API.Models.DTOs;
using Football_Management.API.Models.Entities;

namespace Football_Management.API.Services.Interfaces;

public interface IRoleService : IBaseService<Role, RoleDto, CreateUpdateRoleDto, CreateUpdateRoleDto>
{
}