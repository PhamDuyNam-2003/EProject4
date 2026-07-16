export interface RoomDetails {
  id: string;
  hotelId: string;
  name: string;
  pricePerNight: number;
  maxGuests: number;
}

export class HotelMockAdapter {
  private static readonly MOCK_ROOMS: Record<string, RoomDetails> = {
    "room-1": {
      id: "room-1",
      hotelId: "hotel-1",
      name: "Phòng Standard",
      pricePerNight: 500000,
      maxGuests: 2,
    },
    "room-2": {
      id: "room-2",
      hotelId: "hotel-1",
      name: "Phòng VIP",
      pricePerNight: 1200000,
      maxGuests: 2,
    },
    "room-3": {
      id: "room-3",
      hotelId: "hotel-2",
      name: "Phòng Family",
      pricePerNight: 2000000,
      maxGuests: 4,
    }
  };

  /**
   * Mock API check room availability
   * Giả lập luôn trả về true nếu phòng tồn tại trong Mock
   */
  public async checkAvailability(roomId: string, checkIn: Date, checkOut: Date): Promise<boolean> {
    console.log(`[Mock Hotel Adapter] Checking availability for room ${roomId} from ${checkIn} to ${checkOut}`);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return !!HotelMockAdapter.MOCK_ROOMS[roomId];
  }

  /**
   * Lấy thông tin phòng để Order service tạo Snapshot
   */
  public async getRoomDetails(roomId: string): Promise<RoomDetails | null> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return HotelMockAdapter.MOCK_ROOMS[roomId] || null;
  }
}

export const hotelAdapter = new HotelMockAdapter();
