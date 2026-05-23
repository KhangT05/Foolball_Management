using AutoMapper;
using Football_Management.API.Models.DTOs;
using Football_Management.API.Models.Entities;

namespace Football_Management.API.Services;

public class FootballManagemenAutoMapper : Profile
{
    public FootballManagemenAutoMapper()
    {
        MapUser();
    }
    private void MapUser()
    {
        CreateMap<User, UserDto>().ForMember(u => u.Id, opt => opt.Ignore());
    }
    // private void MapAuth()
    // {
    //     CreateMap<AccessResult, AuthResponse>()
    // }
}