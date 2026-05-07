import React from 'react';
import type { Hotel, SearchFilters } from '../types';
import HotelCard from './HotelCard';
import { useTranslation } from '../LanguageContext';

interface HotelListProps {
  hotels: Hotel[];
  filters: SearchFilters;
  onBook: (hotel: Hotel) => void;
}

const HotelList: React.FC<HotelListProps> = ({ hotels, filters, onBook }) => {
  const { t } = useTranslation();
  
  const filteredHotels = hotels.filter((hotel) => {
    const matchesLocation = filters.location === '' || 
      hotel.location.toLowerCase().includes(filters.location.toLowerCase()) ||
      hotel.name.toLowerCase().includes(filters.location.toLowerCase());
    
    const matchesPrice = hotel.price >= filters.minPrice && hotel.price <= filters.maxPrice;
    
    return matchesLocation && matchesPrice;
  });

  return (
    <div className="hotel-list">
      {filteredHotels.length === 0 ? (
        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 20px' }}>
          <p style={{ fontSize: '1.1em', color: '#666' }}>{t('noHotels')}</p>
          <p style={{ fontSize: '0.9em', color: '#999' }}>
            Total de hoteles disponibles: {hotels.length}
          </p>
        </div>
      ) : (
        filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onBook={onBook} />
        ))
      )}
    </div>
  );
};

export default HotelList;