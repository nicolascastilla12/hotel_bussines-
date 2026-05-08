export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  amenities: string[];
}

export interface SearchFilters {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  minPrice: number;
  maxPrice: number;
}

export interface Booking {
  hotelId: number;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
}