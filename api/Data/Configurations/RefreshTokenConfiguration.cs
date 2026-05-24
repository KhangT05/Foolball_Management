using Football_Management.API.Common;
using Football_Management.API.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Football_Management.API.Data.Configurations;

public class RefreshTokenConfiguration : IEntityTypeConfiguration<RefreshToken>
{
    public void Configure(EntityTypeBuilder<RefreshToken> builder)
    {
        builder.HasKey(x => x.Id);

        builder.ToTable("RefreshToken");

        builder.Property(x => x.Token)
            .IsRequired()
            .HasMaxLength(MaxLength.Credential);

        builder.Property(x => x.IpAddress)
            .HasMaxLength(MaxLength.Minimum);

        // Lookup theo token khi refresh
        builder.HasIndex(x => x.Token)
            .IsUnique();

        builder.Property(x => x.IsRevoked)
            .IsRequired()
            .HasDefaultValue(false);

        builder.Property(x => x.WasUsed)
            .IsRequired()
            .HasDefaultValue(false);
        // Query token hợp lệ: WHERE IsRevoked = 0 AND WasUsed = 0 AND ExpiresAt > NOW
        builder.HasIndex(x => new { x.IsRevoked, x.WasUsed, x.ExpiresAt });

        // Cleanup job + revoke all by user
        builder.HasIndex(x => x.UserId);

        builder.HasOne(x => x.User)
            .WithMany()
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}