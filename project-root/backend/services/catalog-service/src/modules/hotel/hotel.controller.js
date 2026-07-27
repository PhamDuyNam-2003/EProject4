export class HotelController {
    hotelService;
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    createHotel = async (req, res, next) => {
        try {
            const hotelData = {
                ...req.body,
                ownerId: req.user.id
            };
            const hotel = await this.hotelService.createHotel(hotelData);
            res.status(201).json({ success: true, data: hotel });
        }
        catch (error) {
            next(error);
        }
    };
    updateHotel = async (req, res, next) => {
        try {
            const hotel = await this.hotelService.updateHotel(req.params.id, req.body);
            res.status(200).json({ success: true, data: hotel });
        }
        catch (error) {
            next(error);
        }
    };
    getHotelById = async (req, res, next) => {
        try {
            const hotel = await this.hotelService.getHotelById(req.params.id);
            if (!hotel || hotel.deletedAt) {
                res.status(404).json({ success: false, message: 'Hotel not found' });
                return;
            }
            res.status(200).json({ success: true, data: hotel });
        }
        catch (error) {
            next(error);
        }
    };
    getAllHotels = async (req, res, next) => {
        try {
            const hotels = await this.hotelService.getAllHotels(req.query);
            res.status(200).json({ success: true, data: hotels });
        }
        catch (error) {
            next(error);
        }
    };
    deleteHotel = async (req, res, next) => {
        try {
            await this.hotelService.deleteHotel(req.params.id);
            res.status(200).json({ success: true, message: 'Hotel deleted successfully' });
        }
        catch (error) {
            next(error);
        }
    };
}
