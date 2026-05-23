using Football_Management.API.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Football_Management.API.Data.Seeders;

public static class RoleSeeder
{
    public static async Task SeedAsync(AppDbContext db)
    {
        if (await db.Roles.AnyAsync()) return;
        var roles = new List<Role>
        {
            new(
                "Admin System",
                "System administrator with full access to all features and settings"
            ),
              new(
                "Organizer",
                "User responsible for creating and managing tournaments or events"
            ),
              new(
                "Referee",
                "User assigned to supervise matches and update game results"
            ),
              new(
                "User",
                "Regular user with basic access to participate and view information"
            ),
        };
        await db.Roles.AddRangeAsync(roles);
        await db.SaveChangesAsync();
    }
}