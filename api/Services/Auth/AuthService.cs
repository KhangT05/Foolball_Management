// using AutoMapper;
// using Football_Management.API.Attributes;
// using Football_Management.API.Data;
// using Football_Management.API.Models.Entities;
// using Football_Management.API.Repositories.Interfaces;
// using Microsoft.AspNetCore.Identity;

// namespace DoAnTotNghiep.API.Services.Auth;

// [Scoped]
// public class AuthService
// {
//     private readonly IUserRepository _userRepository;
//     private readonly IPasswordHasher<User> _passwordHasher;
//     // private readonly ITokenService _tokenService;
//     private readonly IMapper _mapper;
//     private readonly AppDbContext _db;

//     public AuthService(
//         IUserRepository userRepository,
//         IPasswordHasher<User> passwordHasher,
//         // ITokenService tokenService,
//         IMapper mapper,
//         AppDbContext db)
//     {
//         _userRepository = userRepository;
//         _passwordHasher = passwordHasher;
//         _tokenService = tokenService;
//         _mapper = mapper;
//         _db = db;
//     }

//     public async Task<AuthTokenResponse> LoginAsync(LoginRequest request)
//     {
//         var user = await _userRepository.FindByEmailAsync(request.Email);

//         var hashToVerify = user?.PasswordHash ?? "$2a$11$dummy.hash.prevent.timing.attack.pad";
//         var result = _passwordHasher.VerifyHashedPassword(user!, request.Password, hashToVerify);

//         if (user is null || result == PasswordVerificationResult.Failed)
//             throw new UnauthorizedException("Tài khoản hoặc mật khẩu không chính xác.");

//         return _mapper.Map<AuthTokenResponse>(_tokenService.GenerateAccessToken(user));
//     }

//     public async Task<AuthTokenResponse> RegisterAsync(RegisterRequest request)
//     {
//         await using var tx = await _db.Database.BeginTransactionAsync();
//         try
//         {
//             if (await _userRepository.ExistsByEmailAsync(request.Email))
//                 throw new ConflictException("Email đã được sử dụng.");

//             var user = new User(request.Name, request.Email, request.Phone);
//             user.PasswordHash = _passwordHasher.HashPassword(user, request.Password);

//             await _userRepository.AddAsync(user);
//             await _db.SaveChangesAsync();
//             await tx.CommitAsync();

//             return _mapper.Map<AuthTokenResponse>(_tokenService.GenerateAccessToken(user));
//         }
//         catch { await tx.RollbackAsync(); throw; }
//     }
// }