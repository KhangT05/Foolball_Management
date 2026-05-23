// Controllers/UserController.cs
using Football_Management.API.Common;
using Football_Management.API.Data;
using Football_Management.API.Models.DTOs;
using Football_Management.API.Models.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Football_Management.API.Controllers;

[ApiController]
[Route("api/v1/users")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _db;

    public UserController(AppDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var users = await _db.Users
            .AsNoTracking()
            .Where(u => u.IsActive)
            .Include(u => u.Role)
            .ToListAsync();

        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var user = await _db.Users
            .AsNoTracking()
            .Include(u => u.Role)
            .FirstOrDefaultAsync(u => u.Id == id && u.IsActive);

        if (user is null) return NotFound();

        return Ok(user);
    }

    [HttpPost]
    public async Task<IActionResult> Create(
    [FromBody] CreateUpdateUserDto dto,
    [FromServices] IPasswordHasher<User> passwordHasher)
    {
        var email = dto.Email.ToLowerInvariant(); // normalize 1 lần

        var exists = await _db.Users.AnyAsync(u => u.Email == email);
        if (exists) return Conflict();

        var user = new User(dto.Name, email, dto.Phone);
        user.Password = passwordHasher.HashPassword(user, dto.Password);

        await _db.Users.AddAsync(user);

        try
        {
            await _db.SaveChangesAsync();
        }
        catch (DbUpdateException) // race condition duplicate
        {
            return Conflict();
        }

        return StatusCode(201, new UserDto  // map sang DTO, không trả entity
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email,
            Phone = user.Phone,
            IsActive = user.IsActive,
            CreatedAt = user.CreatedAt
        });
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] CreateUpdateUserDto dto)
    {
        var user = await _db.Users
            .FirstOrDefaultAsync(u => u.Id == id && u.IsActive);

        if (user is null) return NotFound();

        // Set toàn bộ — không cần check null
        user.Name = dto.Name;
        user.Email = dto.Email.ToLowerInvariant();
        user.Phone = dto.Phone;
        user.UpdatedAt = DateTime.UtcNow;

        _db.Users.Update(user);
        await _db.SaveChangesAsync();

        return Ok(user);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var user = await _db.Users
            .FirstOrDefaultAsync(u => u.Id == id && u.IsActive);

        if (user is null) return NotFound();

        user.IsActive = false;
        user.UpdatedAt = DateTime.UtcNow;

        _db.Users.Update(user);
        await _db.SaveChangesAsync();

        return NoContent();
    }
}