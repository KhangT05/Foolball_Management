using AutoMapper;
using Football_Management.API.Data;
using Football_Management.API.Models.DTOs;
using Football_Management.API.Models.Entities;
using Football_Management.API.Repositories.Interfaces;
using Football_Management.API.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Football_Management.API.Services.Implements;

public class UserService :
 BaseService<User, UserDto, CreateUpdateUserDto, CreateUpdateUserDto>, IUserService
{
    private readonly IPasswordHasher<User> _passwordHasher;

    public UserService(
        IUserRepository repository,
        AppDbContext db,
        IMapper mapper)
        : base(repository, db, mapper)
    {
    }
}