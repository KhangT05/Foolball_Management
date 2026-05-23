using AutoMapper;
using Football_Management.API.Data;
using Football_Management.API.Models.Entities.Base;
using Football_Management.API.Repositories.Interfaces;
using Football_Management.API.Services.Interfaces;

namespace Football_Management.API.Services.Implements;

public abstract class BaseService<TEntity, TResponse, TCreateRequest, TUpdateRequest>
    : IBaseService<TEntity, TResponse, TCreateRequest, TUpdateRequest>
    where TEntity : BaseEntity
{
    protected readonly IBaseRepository<TEntity> Repository;
    protected readonly IMapper Mapper;
    protected readonly AppDbContext Db;

    protected BaseService(
        IBaseRepository<TEntity> repository,
        AppDbContext db,
        IMapper mapper
        )
    {
        Repository = repository;
        Db = db;
        Mapper = mapper;
    }
    // ── Mapping helpers ───────────────────────────────────────────
    protected TResponse ToDto(TEntity entity) => Mapper.Map<TResponse>(entity);
    protected TEntity ToEntity(TCreateRequest dto) => Mapper.Map<TEntity>(dto);
    protected void MergeInto(TUpdateRequest dto, TEntity entity) => Mapper.Map(dto, entity);
    protected List<TResponse> ToDtoList(IEnumerable<TEntity> entities) =>
         Mapper.Map<List<TResponse>>(entities);

    #region CRUD Cơ bản

    public virtual async Task<List<TResponse>> GetAllAsync()
    {
        return ToDtoList(await Repository.GetAllAsync());
    }

    public virtual async Task<TResponse> GetByIdAsync(int id)
    {
        return ToDto(await Repository.FindOrFailAsync(id));
    }

    public virtual async Task<TResponse> CreateAsync(TCreateRequest request)
    {
        await using var tx = await Db.Database.BeginTransactionAsync();
        try
        {
            var entity = ToEntity(request);
            await Repository.AddAsync(entity);
            await Db.SaveChangesAsync();
            await tx.CommitAsync();
            return ToDto(entity);
        }
        catch { await tx.RollbackAsync(); throw; }
    }

    public virtual async Task<TResponse> UpdateAsync(int id, TUpdateRequest request)
    {
        await using var tx = await Db.Database.BeginTransactionAsync();
        try
        {
            var entity = await Repository.FindOrFailAsync(id);
            MergeInto(request, entity);
            Repository.Update(entity);
            await Db.SaveChangesAsync();
            await tx.CommitAsync();
            return ToDto(entity);
        }
        catch { await tx.RollbackAsync(); throw; }
    }

    public virtual async Task DeleteAsync(int id)
    {
        await using var tx = await Db.Database.BeginTransactionAsync();
        try
        {
            var entity = await Repository.FindOrFailAsync(id);
            Repository.Remove(entity);
            await Db.SaveChangesAsync();
            await tx.CommitAsync();
        }
        catch { await tx.RollbackAsync(); throw; }
    }
    #endregion
}