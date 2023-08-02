using KaniniTourismApplication.Models.DTO;

namespace KaniniTourismApplication.Interfaces
{
    public interface IService
    {
        public Task<UserDTO?> TravelersRegister(TravelersRegisterDTO travellerRegDTO);
        public Task<UserDTO?> TravelersLogin(UserDTO userDTO);
    }
}
