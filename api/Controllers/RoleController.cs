using Football_Management.API.Controllers.Base;
using Football_Management.API.Models.DTOs;
using Football_Management.API.Models.Entities;
using Football_Management.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Football_Management.API.Controllers;

[Route("api/v1/roles")]
public class RoleController
    : BaseController<Role, RoleDto, CreateUpdateRoleDto, CreateUpdateRoleDto>
{
    private readonly IRoleService _roleService;
    public RoleController(IRoleService roleService,
        ILogger<RoleController> logger
    ) : base(roleService, logger)
    {
        _roleService = roleService;
    }
}