import React, { useState } from 'react';
import type { SearchFilters } from '../types';
import { useTranslation } from '../LanguageContext';

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const { t } = useTranslation();
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const minPriceNum = minPrice === '' ? 0 : Number(minPrice);
    const maxPriceNum = maxPrice === '' ? 2000000 : Number(maxPrice);
    
    onSearch({ 
      location, 
      checkIn: null, 
      checkOut: null, 
      minPrice: minPriceNum, 
      maxPrice: maxPriceNum 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-input-wrapper">
        <label>{t('location')}</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Bogotá, Medellín..."
          className="search-input"
        />
      </div>
      <div className="search-input-wrapper">
        <label>{t('minPrice')}</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Ej: 0"
          className="search-input"
          min="0"
        />
      </div>
      <div className="search-input-wrapper">
        <label>{t('maxPrice')}</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Ej: 2000000"
          className="search-input"
          min="0"
        />
      </div>
      <button type="submit">{t('search')}</button>
    </form>
  );
};

export default SearchForm;