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

  // Cálculo en tiempo real
  const nights =
    checkIn && checkOut && checkOut > checkIn
      ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
      : 0;

  const totalPrice = nights * hotel.price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut || checkOut <= checkIn) {
      alert('Por favor selecciona fechas válidas.');
      return;
    }
    onConfirm({ hotelId: hotel.id, checkIn, checkOut, guests, totalPrice });
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

        {/* ── RESUMEN DE PRECIO ── */}
        {nights > 0 && (
          <div style={{
            background: 'rgba(201, 168, 76, 0.06)',
            border: '1px solid rgba(201, 168, 76, 0.3)',
            borderRadius: '4px',
            padding: '16px 18px',
            marginBottom: '8px',
          }}>
            <p style={{
              color: 'var(--gold)',
              fontSize: '0.75em',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '10px'
            }}>
              Resumen de tu reserva
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ color: '#888', fontSize: '0.9em' }}>Precio por noche</span>
              <span style={{ color: '#fff', fontSize: '0.9em' }}>
                {hotel.price.toLocaleString('es-CO')} COP
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ color: '#888', fontSize: '0.9em' }}>Noches</span>
              <span style={{ color: '#fff', fontSize: '0.9em' }}>{nights}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ color: '#888', fontSize: '0.9em' }}>Huéspedes</span>
              <span style={{ color: '#fff', fontSize: '0.9em' }}>{guests}</span>
            </div>
            <div style={{
              borderTop: '1px solid rgba(201, 168, 76, 0.2)',
              marginTop: '10px',
              paddingTop: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.95em', letterSpacing: '1px' }}>
                TOTAL
              </span>
              <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.15em' }}>
                {totalPrice.toLocaleString('es-CO')} COP
              </span>
            </div>
          </div>
        )}

        <button type="submit">{t('confirm')}</button>
        <button type="button" onClick={onCancel}>{t('cancel')}</button>
      </form>
    </div>
  );
};

export default BookingForm;