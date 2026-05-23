using Football_Management.API.Models.Entities.Base;

namespace Football_Management.API.Services.Interfaces;

public interface IBaseService<TEntity, TResponse, TCreateRequest, TUpdateRequest>
    where TEntity : BaseEntity
{
    Task<List<TResponse>> GetAllAsync();
    Task<TResponse> GetByIdAsync(int id);
    Task<TResponse> CreateAsync(TCreateRequest request);
    Task<TResponse> UpdateAsync(int id, TUpdateRequest request);
    Task DeleteAsync(int id);
}