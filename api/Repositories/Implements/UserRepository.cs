using Football_Management.API.Data;
using Football_Management.API.Models.Entities;
using Football_Management.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Football_Management.API.Repositories.Implements;

public class UserRepository : BaseRepository<User>, IUserRepository
{
    private readonly DbSet<User> _user;
    public UserRepository(
        AppDbContext db
    ) : base(db)
    {
        _user = db.Users;
    }

}