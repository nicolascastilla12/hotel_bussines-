import React, { useState } from 'react';
import type { SearchFilters } from '../types';
import { useTranslation } from '../LanguageContext';

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
}

// Formatea número con puntos: 1000000 → "1.000.000"
const formatPrice = (val: string): string => {
  const digits = val.replace(/\D/g, '');
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// Quita puntos para obtener el número: "1.000.000" → 1000000
const parsePrice = (val: string): number => {
  return Number(val.replace(/\./g, ''));
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const { t } = useTranslation();
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(formatPrice(e.target.value));
  };

  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(formatPrice(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const minPriceNum = minPrice === '' ? 0 : parsePrice(minPrice);
    const maxPriceNum = maxPrice === '' ? 10000000 : parsePrice(maxPrice);
    
    onSearch({ 
      location, 
      checkIn: null, 
      checkOut: null, 
      minPrice: minPriceNum, 
      maxPrice: maxPriceNum 
    });
  };

  const handleReset = () => {
    setLocation('');
    setMinPrice('');
    setMaxPrice('');
    onSearch({
      location: '',
      checkIn: null,
      checkOut: null,
      minPrice: 0,
      maxPrice: 10000000
    });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div>
        <label>{t('location')}</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Bogotá, Medellín..."
        />
      </div>
      <div>
        <label>{t('minPrice')}</label>
        <input
          type="text"
          value={minPrice}
          onChange={handleMinPrice}
          placeholder="Ej: 500.000"
        />
      </div>
      <div>
        <label>{t('maxPrice')}</label>
        <input
          type="text"
          value={maxPrice}
          onChange={handleMaxPrice}
          placeholder="Ej: 2.000.000"
        />
      </div>
      <button type="submit">{t('search')}</button>
      <button type="button" onClick={handleReset} style={{
        background: 'transparent',
        color: 'var(--gold)',
        border: '1px solid var(--gold)',
        marginTop: 0
      }}>
        {t('reset') || 'Limpiar'}
      </button>
    </form>
  );
};

export default SearchForm;