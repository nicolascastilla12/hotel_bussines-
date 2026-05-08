import React from 'react';
import type { Hotel } from '../types';
import { useTranslation } from '../LanguageContext';

interface HotelCardProps {
  hotel: Hotel;
  onBook: (hotel: Hotel) => void;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, onBook }) => {
  const { t, language } = useTranslation();

  const name = language === 'en' && hotel.nameEn ? hotel.nameEn : hotel.name;
  const description = language === 'en' && hotel.descriptionEn ? hotel.descriptionEn : hotel.description;
  const location = language === 'en' && hotel.locationEn ? hotel.locationEn : hotel.location;

  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{t('pricePer')} {hotel.price.toLocaleString('es-CO')} COP {t('perNight')}</p>
      <p>{t('rating')} {hotel.rating}/5</p>
      <p>{description}</p>
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