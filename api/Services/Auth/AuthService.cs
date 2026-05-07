using DoAnTotNghiep.API.Models.DTOs;
using DoAnTotNghiep.API.Repositories.Implements;

namespace DoAnTotNghiep.API.Services.Auth;

public class AuthService
{
    protected readonly UserRepository _userRepository;
    public AuthService(
        UserRepository userRepository
    )
    {
        _userRepository = userRepository;
    }
    // public async Task<AuthLoginDto> Login(AuthLoginDto loginDto)
    // {
    //     // var checkEmail 
    // }
}