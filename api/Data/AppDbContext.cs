using DoAnTotNghiep.API.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace DoAnTotNghiep.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Users> Users { get; set; }
    #region on model creating
    /// <summary>
    /// Cấu hình model cho toàn bộ hệ thống.
    ///  Bao gồm:
    /// 1. Áp dụng tất cả các Entity Configuration:
    ///    - Tự động quét và đăng ký các class implement IEntityTypeConfiguration
    ///      trong assembly hiện tại (UserConfiguration, ProductConfiguration,...)
    ///    - Giúp tách riêng cấu hình ra khỏi entity, đảm bảo clean architecture.
    /// 
    /// 2. BaseConfiguration dùng chung:
    ///    - Định nghĩa các cấu hình chung cho mọi entity kế thừa BaseEntities
    ///      (Id, CreatedAt, UpdatedAt,...)
    ///    - Tránh lặp lại cấu hình ở từng entity riêng lẻ.
    ///
    /// 3. Soft Delete:
    ///    - Sử dụng cờ IsDeleted thay vì xóa dữ liệu vật lý khỏi database
    ///    - Đảm bảo dữ liệu có thể được khôi phục khi cần thiết
    ///
    /// 4. Global Query Filter:
    ///    - Tự động lọc các bản ghi có IsDeleted = true
    ///    - Áp dụng cho toàn bộ query mà không cần viết điều kiện thủ công
    ///
    /// 5. Audit Fields (CreatedBy, UpdatedBy):
    ///    - Tự động lưu thông tin người tạo và người cập nhật
    ///    - Thường được xử lý trong DbContext (SaveChanges) hoặc middleware/service
    ///
    /// => Mục tiêu:
    ///    - Tăng tính tái sử dụng
    ///    - Giảm lặp code
    ///    - Dễ bảo trì và mở rộng hệ thống
    /// </summary>
    /// <param name="modelBuilder"></param>
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);

    }
    #endregion
}