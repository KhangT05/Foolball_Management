using Microsoft.EntityFrameworkCore;

namespace Football_Management.API.Data.Seeders;

public static class DataSeeder
{
    public static async Task SeedAsync(IServiceProvider service)
    {
        using var scope = service.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        await db.Database.MigrateAsync();
        // await UserSeeder.SeedAsync(db);
        // await RoleSeeder.SeedAsync(db);
    }
}