using KaniniTourismApplication.Models.DTO;

namespace KaniniTourismApplication.Interfaces
{
    public interface ITokenGenerate
    {
        public string GenerateToken(UserDTO user);

    }
}
