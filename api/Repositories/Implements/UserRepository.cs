using Football_Management.API.Attributes;
using Football_Management.API.Data;
using Football_Management.API.Models.Entities;
using Football_Management.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Football_Management.API.Repositories.Implements;

[Scoped]
public class UserRepository : BaseRepository<User>, IUserRepository
{
    public UserRepository(
        AppDbContext db
    ) : base(db)
    {
    }
    public async Task<User?> FindByEmailAsync(string email)
    {
        return await DbSet.Include(u => u.Role)
            .FirstOrDefaultAsync(u => u.Email == email && u.IsActive);
    }
    public async Task<bool> ExistsByEmailAsync(string email)
    {
        return await DbSet.AnyAsync(u => u.Email == email);
    }
}