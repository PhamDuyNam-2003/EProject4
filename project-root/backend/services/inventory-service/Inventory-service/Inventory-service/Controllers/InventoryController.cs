using Inventory_service.Application.DTOs;
using Inventory_service.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Inventory_service.Controllers
{
    [Route("api/v1/inventory")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        private readonly IInventoryService _inventoryService;

        public InventoryController(IInventoryService inventoryService)
        {
            _inventoryService = inventoryService;
        }

        [HttpPost("check-availability")]
        public async Task<IActionResult> CheckAvailability([FromBody] CheckAvailabilityRequest request)
        {
            var isAvailable = await _inventoryService.CheckAvailabilityAsync(request);
            return Ok(new { Available = isAvailable });
        }

        [HttpPost("lock")]
        public async Task<IActionResult> LockRoom([FromBody] LockRoomRequest request)
        {
            var response = await _inventoryService.LockRoomAsync(request);
            if (!response.IsSuccess)
            {
                return BadRequest(new { Error = response.Message });
            }
            return Ok(response);
        }
    }
}
