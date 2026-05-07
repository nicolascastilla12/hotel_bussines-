import React from 'react';
import type { Hotel } from '../types';
import { useTranslation } from '../LanguageContext';

interface HotelCardProps {
  hotel: Hotel;
  onBook: (hotel: Hotel) => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onBook }) => {
  const { t } = useTranslation();
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <p>{hotel.location}</p>
      <p>Price: {hotel.price.toLocaleString()} COP {t('perNight')}</p>
      <p>Rating: {hotel.rating}/5</p>
      <p>{hotel.description}</p>
      <ul>
        {hotel.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
      <button onClick={() => onBook(hotel)}>{t('bookNow')}</button>
    </div>
  );
};

export default HotelCard;