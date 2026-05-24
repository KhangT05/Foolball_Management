using System.Reflection;
using Football_Management.API.Attributes;

namespace Football_Management.API.Extensions;

public static class ServiceCollectionExtensions
{
    /// <summary>
    /// Scan toàn bộ assembly, đăng ký tất cả class có [Scoped], [Singleton], [Transient].
    /// Tự động đăng ký cả interface và concrete type (AsSelf + AsImplementedInterfaces).
    /// Bỏ qua các marker interfaces (IDisposable, etc.) và interfaces từ Microsoft namespace.
    /// </summary>
    public static IServiceCollection AddApplicationServices(
        this IServiceCollection services,
        Assembly assembly)
    {
        var types = assembly.GetTypes()
            .Where(t => t is { IsClass: true, IsAbstract: false, IsGenericType: false }
                && t.GetCustomAttribute<ServiceLifetimeAttribute>() != null);

        foreach (var type in types)
        {
            var lifetime = type.GetCustomAttribute<ServiceLifetimeAttribute>()!.Lifetime;

            // AsSelf — luôn đăng ký concrete type
            services.Add(new ServiceDescriptor(type, type, lifetime));

            // AsImplementedInterfaces — bỏ qua system interfaces
            var interfaces = type.GetInterfaces()
                .Where(i => i.Namespace != null
                         && !i.Namespace?.StartsWith("System") == true
                         && !i.Namespace?.StartsWith("Microsoft") == true);

            foreach (var iface in interfaces)
                services.Add(new ServiceDescriptor(iface, type, lifetime));
        }

        return services;
    }
}