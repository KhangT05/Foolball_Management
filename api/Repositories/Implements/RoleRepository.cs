using Football_Management.API.Attributes;
using Football_Management.API.Data;
using Football_Management.API.Models.Entities;
using Football_Management.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Football_Management.API.Repositories.Implements;

[Scoped]
public class RoleRepository : BaseRepository<Role>, IRoleRepository
{
    private readonly DbSet<Role> _role;
    public RoleRepository(
        AppDbContext db
    ) : base(db)
    {
        _role = db.Roles;
    }

}