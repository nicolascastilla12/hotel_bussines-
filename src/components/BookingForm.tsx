import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import type { Hotel, Booking } from '../types';
import { useTranslation } from '../LanguageContext';

interface BookingFormProps {
  hotel: Hotel;
  onConfirm: (booking: Booking) => void;
  onCancel: () => void;
}

const BookingForm = ({ hotel, onConfirm, onCancel }: BookingFormProps) => {
  const { t } = useTranslation();
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkIn || !checkOut || checkOut <= checkIn) {
      alert('Please select valid check-in and check-out dates.');
      return;
    }

    const nights = Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );

    const totalPrice = nights * hotel.price;

    onConfirm({
      hotelId: hotel.id,
      checkIn,
      checkOut,
      guests,
      totalPrice,
    });
  };

  return (
    <div className="booking-form">
      <h2>{t('bookHotel', { name: hotel.name })}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>{t('checkInLabel')}</label>

          <DatePicker
            selected={checkIn}
            onChange={(date: Date | null) => setCheckIn(date)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
          />
        </div>

        <div>
          <label>{t('checkOutLabel')}</label>

          <DatePicker
            selected={checkOut}
            onChange={(date: Date | null) => setCheckOut(date)}
            dateFormat="yyyy-MM-dd"
            minDate={checkIn || new Date()}
          />
        </div>

        <div>
          <label>{t('guests')}</label>

          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            min={1}
          />
        </div>

        <button type="submit">{t('confirm')}</button>

        <button type="button" onClick={onCancel}>
          {t('cancel')}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;