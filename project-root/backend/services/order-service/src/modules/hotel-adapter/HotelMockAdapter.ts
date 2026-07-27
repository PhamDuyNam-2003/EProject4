export interface RoomDetails {
  id: string;
  hotelId: string;
  name: string;
  pricePerNight: number;
  maxGuests: number;
}

export class HotelMockAdapter {
  private static readonly MOCK_ROOMS: Record<string, RoomDetails> = {
    "46fd1b9f-1a7d-4b41-a7af-928a8c0fff65": {
      id: "46fd1b9f-1a7d-4b41-a7af-928a8c0fff65",
      hotelId: "1da9801c-2325-43c4-91ea-a76bc8813f01",
      name: "Phòng Standard",
      pricePerNight: 500000,
      maxGuests: 2,
    },
    "46fd1b9f-1a7d-4b41-a7af-928a8c0fff66": {
      id: "46fd1b9f-1a7d-4b41-a7af-928a8c0fff66",
      hotelId: "1da9801c-2325-43c4-91ea-a76bc8813f01",
      name: "Phòng VIP",
      pricePerNight: 1200000,
      maxGuests: 2,
    },
    "46fd1b9f-1a7d-4b41-a7af-928a8c0fff67": {
      id: "46fd1b9f-1a7d-4b41-a7af-928a8c0fff67",
      hotelId: "1da9801c-2325-43c4-91ea-a76bc8813f02",
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
