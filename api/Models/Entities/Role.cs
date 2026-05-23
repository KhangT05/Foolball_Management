using Football_Management.API.Models.Entities.Base;

namespace Football_Management.API.Models.Entities;

public class Role : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }

    public Role() { }

    public Role(string name, string? description = null)
    {
        Name = name;
        Description = description;
    }
}