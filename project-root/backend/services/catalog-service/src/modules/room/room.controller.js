export class RoomController {
    roomService;
    constructor(roomService) {
        this.roomService = roomService;
    }
    createRoom = async (req, res, next) => {
        try {
            const room = await this.roomService.createRoom(req.params.hotelId, req.params.roomTypeId, req.body);
            res.status(201).json({ success: true, data: room });
        }
        catch (error) {
            next(error);
        }
    };
    updateRoom = async (req, res, next) => {
        try {
            const room = await this.roomService.updateRoom(req.params.id, req.body);
            res.status(200).json({ success: true, data: room });
        }
        catch (error) {
            next(error);
        }
    };
    getRoomsByRoomType = async (req, res, next) => {
        try {
            const rooms = await this.roomService.getRoomsByRoomType(req.params.roomTypeId);
            res.status(200).json({ success: true, data: rooms });
        }
        catch (error) {
            next(error);
        }
    };
    deleteRoom = async (req, res, next) => {
        try {
            await this.roomService.deleteRoom(req.params.id);
            res.status(200).json({ success: true, message: 'Room deleted successfully' });
        }
        catch (error) {
            next(error);
        }
    };
}
