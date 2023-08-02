using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using KaniniTourismApplication.Interfaces;
using KaniniTourismApplication.Models;
using KaniniTourismApplication.Models.DTO;

namespace Travelers.Controllers
{
    [Route("api/[controller]/[action]")]

    [ApiController]
    [EnableCors("MyCors")]
    public class TravelersController : ControllerBase
    {
        private readonly IRepo<Traveler, int> _irepo;
        private readonly IService _iservice;

        public TravelersController(IRepo<Traveler, int> irepo, IService iservice)
        {
            _irepo = irepo;
            _iservice = iservice;
        }

        [HttpPut]
        public async Task<UserDTO> TravelersRegister(TravelersRegisterDTO traveler)
        {
            try
            {
                UserDTO userDTO = await _iservice.TravelersRegister(traveler);
                if (userDTO == null)
                {
                    return null;
                }
                return userDTO;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
