using Football_Management.API.Common;
using Football_Management.API.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Football_Management.API.Data.Configurations;

public class CsrfTokenConfiguration : IEntityTypeConfiguration<CsrfToken>
{
    public void Configure(EntityTypeBuilder<CsrfToken> builder)
    {
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Token)
            .IsRequired()
            .HasMaxLength(MaxLength.Credential);

        builder.HasIndex(x => x.Token)
            .IsUnique();

        // deleteCsrfTokenByUserId
        builder.HasIndex(x => x.UserId);

        builder.HasOne(x => x.User)
            .WithMany()
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}