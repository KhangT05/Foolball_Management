using DoAnTotNghiep.API.Data;
using DoAnTotNghiep.API.Models.Entities;
using DoAnTotNghiep.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DoAnTotNghiep.API.Repositories.Implements;

public class UserRepository : BaseRepository<Users>, IUserRepository
{
    private readonly DbSet<Users> _user;
    public UserRepository(
        AppDbContext db
    ) : base(db)
    {
        _user = db.Users;
    }

}