using Football_Management.API.Models.Entities;

namespace Football_Management.API.Repositories.Interfaces;

public interface IUserRepository : IBaseRepository<User>
{
    Task<User?> FindByEmailAsync(string email);
    Task<bool> ExistsByEmailAsync(string email);
}