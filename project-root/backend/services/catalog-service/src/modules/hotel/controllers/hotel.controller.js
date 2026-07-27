import * as hotelService from '../services/hotel.service.js';
export const getAllHotels = async (req, res) => {
    try {
        const search = req.query.search;
        const category = req.query.category;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const filters = {
            minPrice: req.query.minPrice,
            maxPrice: req.query.maxPrice,
            rating: req.query.rating,
            petFriendly: req.query.petFriendly,
            amenities: req.query.amenities
        };
        const result = await hotelService.getAllHotels(search || undefined, category || undefined, page, limit, filters);
        res.status(200).json({ success: true, ...result });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const getHotelById = async (req, res) => {
    try {
        const hotel = await hotelService.getHotelById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ success: false, message: 'Hotel not found' });
        }
        res.status(200).json({ success: true, data: hotel });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const createHotel = async (req, res) => {
    try {
        const hotel = await hotelService.createHotel(req.body);
        res.status(201).json({ success: true, data: hotel });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const getRoomTypes = async (req, res) => {
    try {
        const roomTypes = await hotelService.getRoomTypesByHotelId(req.params.id);
        res.status(200).json({ success: true, data: roomTypes });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const getReviews = async (req, res) => {
    try {
        const reviews = await hotelService.getReviewsByHotelId(req.params.id);
        res.status(200).json({ success: true, data: reviews });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const lockRoom = async (req, res) => {
    try {
        const { roomTypeId, quantity, checkIn, checkOut } = req.body;
        const result = await hotelService.lockRoom(roomTypeId, quantity, new Date(checkIn), new Date(checkOut));
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
