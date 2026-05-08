import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import HotelList from './components/HotelList';
import BookingForm from './components/BookingForm';
import { mockHotels } from './data';
import type { Hotel, SearchFilters, Booking } from './types';
import { LanguageProvider, useTranslation } from './LanguageContext';

function AppContent() {
  const { t, toggleLanguage } = useTranslation();
  const [hotels] = useState<Hotel[]>(mockHotels);
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    checkIn: null,
    checkOut: null,
    minPrice: 0,
    maxPrice: 10000000
  });
  const [bookingHotel, setBookingHotel] = useState<Hotel | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  const handleBook = (hotel: Hotel) => {
    setBookingHotel(hotel);
  };

  const handleConfirmBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
    setBookingHotel(null);
    alert(t('bookingConfirmed'));
  };

  const handleCancelBooking = () => {
    setBookingHotel(null);
  };

  return (
    <div className="app">
      <header>
        <div className="header-top">
          <button onClick={toggleLanguage} className="language-btn">{t('language')}</button>
        </div>
        <div className="header-content">
          <div className="header-line" />
          <h1>{t('title')}</h1>
          <div className="header-line" />
        </div>
      </header>
      <main>
        <SearchForm onSearch={handleSearch} />
        <HotelList hotels={hotels} filters={filters} onBook={handleBook} />
        {bookingHotel && (
          <div className="modal">
            <BookingForm
              hotel={bookingHotel}
              onConfirm={handleConfirmBooking}
              onCancel={handleCancelBooking}
            />
          </div>
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
