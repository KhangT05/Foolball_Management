using System.Security.Claims;
using Football_Management.API.Models.Entities.Base;
using Football_Management.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Football_Management.API.Controllers.Base;

[ApiController]
public abstract class BaseController<TEntity, TResponse, TCreateRequest, TUpdateRequest>
    : ControllerBase
    where TEntity : BaseEntity
{
    protected readonly IBaseService<TEntity, TResponse, TCreateRequest, TUpdateRequest> Service;

    protected BaseController(
        IBaseService<TEntity, TResponse, TCreateRequest, TUpdateRequest> service)
    {
        Service = service;
    }

    // ── Auth helpers ──────────────────────────────────────────────
    protected int CurrentUserId =>
        int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
            ?? throw new InvalidOperationException("CurrentUserId called on unauthenticated request."));

    protected string? CurrentUserEmail => User.FindFirstValue(ClaimTypes.Email);
    protected string? CurrentUserRole => User.FindFirstValue(ClaimTypes.Role);
    protected bool IsAuthenticated => User.Identity?.IsAuthenticated ?? false;

    // ── CRUD ──────────────────────────────────────────────────────
    [HttpGet]
    public virtual async Task<IActionResult> GetAll()
        => Ok(await Service.GetAllAsync());

    [HttpGet("{id}")]
    public virtual async Task<IActionResult> GetById(int id)
        => Ok(await Service.GetByIdAsync(id));

    [HttpPost]
    public virtual async Task<IActionResult> Create([FromBody] TCreateRequest request)
        => StatusCode(StatusCodes.Status201Created, await Service.CreateAsync(request));

    [HttpPut("{id}")]
    public virtual async Task<IActionResult> Update(int id, [FromBody] TUpdateRequest request)
        => Ok(await Service.UpdateAsync(id, request));

    [HttpDelete("{id}")]
    public virtual async Task<IActionResult> Delete(int id)
    {
        await Service.DeleteAsync(id);
        return NoContent();
    }

    // [HttpPatch("{id}/restore")]
    // public virtual async Task<IActionResult> Restore(int id)
    // {
    //     await Service.RestoreAsync(id);
    //     return NoContent();
    // }

    // [HttpDelete("{id}/permanent")]
    // public virtual async Task<IActionResult> DeletePermanently(int id)
    // {
    //     await Service.DeletePermanentlyAsync(id);
    //     return NoContent();
    // }
}