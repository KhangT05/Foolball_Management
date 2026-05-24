using AutoMapper;
using Football_Management.API.Attributes;
using Football_Management.API.Data;
using Football_Management.API.Models.DTOs;
using Football_Management.API.Models.Entities;
using Football_Management.API.Repositories.Interfaces;
using Football_Management.API.Services.Interfaces;

namespace Football_Management.API.Services.Implements;

[Scoped]
public class RoleService :
 BaseService<Role, RoleDto, CreateUpdateRoleDto, CreateUpdateRoleDto>, IRoleService
{
    public RoleService(
        IRoleRepository repository,
        AppDbContext db,
        IMapper mapper)
        : base(repository, db, mapper)
    {
    }
}