using DoAnTotNghiep.API.Models.Entities;

namespace DoAnTotNghiep.API.Repositories.Interfaces;

public interface IBaseRepository<TEntity>
where TEntity : BaseEntities
{
    Task<TEntity?> FindAsync(int Id);
    Task<TEntity?> FindOrFailAsync(int Id);
    Task<List<TEntity>> GetAllAsync();
    Task<TEntity> AddAsync(TEntity entity);
    void Update(TEntity entity);
    void Remove(TEntity entity);
    IQueryable<TEntity> Query();
    // Task AddRangeAsync(IEnumerable<TEntity> entities);
    // void UpdateRange(IEnumerable<TEntity> entities);
    // void RemoveRange(IEnumerable<TEntity> entities);

}