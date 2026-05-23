namespace Football_Management.API.Attributes;

[AttributeUsage(AttributeTargets.Class, Inherited = false)]
public abstract class ServiceLifetimeAttribute : Attribute
{
    public ServiceLifetime Lifetime { get; }
    protected ServiceLifetimeAttribute(ServiceLifetime lifetime) => Lifetime = lifetime;
}

[AttributeUsage(AttributeTargets.Class, Inherited = false)]
public sealed class ScopedAttribute : ServiceLifetimeAttribute
{
    public ScopedAttribute() : base(ServiceLifetime.Scoped) { }
}

[AttributeUsage(AttributeTargets.Class, Inherited = false)]
public sealed class SingletonAttribute : ServiceLifetimeAttribute
{
    public SingletonAttribute() : base(ServiceLifetime.Singleton) { }
}

[AttributeUsage(AttributeTargets.Class, Inherited = false)]
public sealed class TransientAttribute : ServiceLifetimeAttribute
{
    public TransientAttribute() : base(ServiceLifetime.Transient) { }
}