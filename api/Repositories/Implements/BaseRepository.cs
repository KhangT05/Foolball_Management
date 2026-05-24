using Football_Management.API.Data;
using Microsoft.EntityFrameworkCore;
// using Football_Management.API.Common.Exceptions;
using Football_Management.API.Repositories.Interfaces;
using Football_Management.API.Models.Entities.Base;
namespace Football_Management.API.Repositories.Implements;

public class BaseRepository<TEntity> : IBaseRepository<TEntity>
    where TEntity : BaseEntity
{
    protected readonly AppDbContext Db;
    protected readonly DbSet<TEntity> DbSet;
    public BaseRepository(
        AppDbContext db
    )
    {
        Db = db;
        DbSet = db.Set<TEntity>();
    }
    public async Task<TEntity?> FindAsync(int Id)
        => await DbSet.FindAsync(Id);
    public async Task<TEntity?> FindOrFailAsync(int Id)
    => await DbSet.FindAsync(Id);
    // ?? throw new NotFoundException($"{typeof(TEntity).Name} #{Id} không tồn tại.");
    public IQueryable<TEntity> Query() => DbSet.AsQueryable();
    public async Task<List<TEntity>> GetAllAsync() => await DbSet.ToListAsync();
    public async Task<TEntity> AddAsync(TEntity entity)
    {
        await DbSet.AddAsync(entity);
        return entity;
    }

    public void Update(TEntity entity) => Db.Entry(entity).State = EntityState.Modified;
    public void Remove(TEntity entity) => DbSet.Remove(entity);
    public void Restore(TEntity entity)
    {
        // entity.IsDeleted = false;
        Update(entity);
    }
    public void RemovePermanently(TEntity entity) => DbSet.Remove(entity);
    public void RestoreRange(IEnumerable<TEntity> entities)
    {
        //foreach (var entity in entities)
        {//
         // entity.IsDeleted = false;
         //Update(entity);
        }// Cách tối ưu hơn: sử dụng LINQ để cập nhật tất cả các entity trong một lần gọi
        //foreach (var entity in entities)
        {
            //  entity.IsDeleted = false;
        }// Sau đó, gọi UpdateRange để cập nhật tất cả các entity đã được đánh dấu là không bị xóa
        //UpdateRange(entities);// Cách tối ưu hơn: sử dụng LINQ để cập nhật
        //  tất cả các entity trong một lần gọi

    }

    // public void UpdateRange(IEnumerable<TEntity> entities)
    // {
    //     foreach (var entity in entities)
    //         Db.Entry(entity).State = EntityState.Modified;
    // }
    // public async Task AddRangeAsync(IEnumerable<TEntity> entities) 
    // => await DbSet.AddRangeAsync(entities);
    // public void RemoveRange(IEnumerable<TEntity> entities) => DbSet.RemoveRange(entities);
}