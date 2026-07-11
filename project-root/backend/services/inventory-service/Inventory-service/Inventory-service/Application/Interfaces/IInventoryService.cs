using Inventory_service.Application.DTOs;

namespace Inventory_service.Application.Interfaces
{
    public interface IInventoryService
    {
        Task<bool> CheckAvailabilityAsync(CheckAvailabilityRequest request);
        Task<InventoryResponse> LockRoomAsync(LockRoomRequest request);
    }
}
