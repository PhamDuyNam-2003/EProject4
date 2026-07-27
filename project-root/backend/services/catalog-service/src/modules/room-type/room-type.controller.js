export class RoomTypeController {
    roomTypeService;
    constructor(roomTypeService) {
        this.roomTypeService = roomTypeService;
    }
    createRoomType = async (req, res, next) => {
        try {
            const roomType = await this.roomTypeService.createRoomType(req.params.hotelId, req.body);
            res.status(201).json({ success: true, data: roomType });
        }
        catch (error) {
            next(error);
        }
    };
    updateRoomType = async (req, res, next) => {
        try {
            const roomType = await this.roomTypeService.updateRoomType(req.params.id, req.body);
            res.status(200).json({ success: true, data: roomType });
        }
        catch (error) {
            next(error);
        }
    };
    getRoomTypeById = async (req, res, next) => {
        try {
            const roomType = await this.roomTypeService.getRoomTypeById(req.params.id);
            if (!roomType || !roomType.isActive) {
                res.status(404).json({ success: false, message: 'RoomType not found' });
                return;
            }
            res.status(200).json({ success: true, data: roomType });
        }
        catch (error) {
            next(error);
        }
    };
    getRoomTypesByHotel = async (req, res, next) => {
        try {
            const roomTypes = await this.roomTypeService.getRoomTypesByHotel(req.params.hotelId);
            res.status(200).json({ success: true, data: roomTypes });
        }
        catch (error) {
            next(error);
        }
    };
    deleteRoomType = async (req, res, next) => {
        try {
            await this.roomTypeService.deleteRoomType(req.params.id);
            res.status(200).json({ success: true, message: 'RoomType deleted successfully' });
        }
        catch (error) {
            next(error);
        }
    };
}
