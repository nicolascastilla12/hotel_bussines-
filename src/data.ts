import type { Hotel } from './types';

export const mockHotels: Hotel[] = [
  {
    id: 1,
    name: 'Nicolas Luxury Suites',
    location: 'Bogotá',
    price: 1000000,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=Nicolas+Luxury+Suites',
    description: 'Suites de lujo en el corazón de Bogotá con comodidades modernas y vistas panorámicas.',
    amenities: ['WiFi', 'Piscina', 'Gimnasio', 'Spa', 'Restaurante']
  },
  {
    id: 2,
    name: 'Casa Deco Hotel',
    location: 'Bogotá',
    price: 850000,
    rating: 4.8,
    image: 'https://via.placeholder.com/300x200?text=Casa+Deco+Hotel',
    description: 'Hotel boutique en el centro histórico de Bogotá, con diseño contemporáneo y arte local.',
    amenities: ['WiFi', 'Desayuno', 'Bar', 'Terraza']
  },
  {
    id: 3,
    name: 'Hotel de la Opera',
    location: 'Bogotá',
    price: 1200000,
    rating: 4.7,
    image: 'https://via.placeholder.com/300x200?text=Hotel+de+la+Opera',
    description: 'Hotel de lujo en el centro de Bogotá, cercano a teatros y restaurantes.',
    amenities: ['WiFi', 'Piscina', 'Spa', 'Concierge']
  },
  {
    id: 4,
    name: 'Diez Hotel',
    location: 'Medellín',
    price: 720000,
    rating: 4.6,
    image: 'https://via.placeholder.com/300x200?text=Diez+Hotel',
    description: 'Hotel moderno en el corazón de Medellín, con diseño innovador y vistas a la ciudad.',
    amenities: ['WiFi', 'Desayuno', 'Piscina', 'Bar']
  },
  {
    id: 5,
    name: 'Hotel Poblado Plaza',
    location: 'Medellín',
    price: 650000,
    rating: 4.5,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Poblado+Plaza',
    description: 'Hotel cómodo en el barrio El Poblado, ideal para negocios y turismo.',
    amenities: ['WiFi', 'Estacionamiento', 'Gimnasio', 'Restaurante']
  },
  {
    id: 6,
    name: 'Sofitel Legend Santa Clara',
    location: 'Cartagena',
    price: 1500000,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=Sofitel+Legend+Santa+Clara',
    description: 'Hotel histórico de lujo en Cartagena, con arquitectura colonial y spa exclusivo.',
    amenities: ['WiFi', 'Piscina', 'Spa', 'Acceso a playa', 'Restaurante']
  },
  {
    id: 7,
    name: 'Hotel Santa Clara',
    location: 'Cartagena',
    price: 880000,
    rating: 4.7,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Santa+Clara',
    description: 'Convento convertido en hotel boutique en el centro histórico de Cartagena.',
    amenities: ['WiFi', 'Piscina', 'Patio', 'Bar']
  },
  {
    id: 8,
    name: 'InterContinental Cali',
    location: 'Cali',
    price: 480000,
    rating: 4.4,
    image: 'https://via.placeholder.com/300x200?text=InterContinental+Cali',
    description: 'Hotel de negocios en Cali, con instalaciones modernas y servicio de alta calidad.',
    amenities: ['WiFi', 'Piscina', 'Gimnasio', 'Restaurante']
  },
  {
    id: 9,
    name: 'Hotel Dann Carlton',
    location: 'Cali',
    price: 550000,
    rating: 4.3,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Dann+Carlton',
    description: 'Hotel tradicional en el centro de Cali, con historia y comodidad.',
    amenities: ['WiFi', 'Desayuno', 'Bar', 'Estacionamiento']
  },
  {
    id: 10,
    name: 'Hotel El Prado',
    location: 'Barranquilla',
    price: 640000,
    rating: 4.4,
    image: 'https://via.placeholder.com/300x200?text=Hotel+El+Prado',
    description: 'Hotel icónico en Barranquilla, con arquitectura art deco y encanto histórico.',
    amenities: ['WiFi', 'Piscina', 'Restaurante', 'Bar']
  },
  {
    id: 11,
    name: 'Hotel Casa Deco Bucaramanga',
    location: 'Bucaramanga',
    price: 560000,
    rating: 4.3,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Casa+Deco+Bucaramanga',
    description: 'Hotel boutique en Bucaramanga, con diseño elegante y vistas a las montañas.',
    amenities: ['WiFi', 'Desayuno', 'Terraza', 'Senderismo']
  },
  {
    id: 12,
    name: 'Hotel Movich Pereira',
    location: 'Pereira',
    price: 520000,
    rating: 4.1,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Movich+Pereira',
    description: 'Hotel moderno en Pereira, en el eje cafetero, con comodidades para viajeros.',
    amenities: ['WiFi', 'Desayuno', 'Gimnasio', 'Guías turísticos']
  },
  {
    id: 13,
    name: 'Hotel Irotama Resort',
    location: 'Santa Marta',
    price: 760000,
    rating: 4.5,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Irotama+Resort',
    description: 'Resort en Santa Marta, cerca del Parque Tayrona, con playas privadas.',
    amenities: ['WiFi', 'Piscina', 'Acceso a playa', 'Spa']
  },
  {
    id: 14,
    name: 'Hotel Estelar La Fontana',
    location: 'Armenia',
    price: 450000,
    rating: 4.2,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Estelar+La+Fontana',
    description: 'Hotel en Armenia, en el Quindío, con jardines y cafeterías cercanas.',
    amenities: ['WiFi', 'Desayuno', 'Piscina', 'Jardín']
  },
  {
    id: 15,
    name: 'Hotel Hacienda Venecia',
    location: 'Salento',
    price: 600000,
    rating: 4.6,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Hacienda+Venecia',
    description: 'Hacienda colonial en Salento, ideal para turismo rural y naturaleza.',
    amenities: ['WiFi', 'Desayuno', 'Cabalgatas', 'Senderismo']
  },
  {
    id: 16,
    name: 'Hotel Charleston Santa Marta',
    location: 'Santa Marta',
    price: 700000,
    rating: 4.4,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Charleston+Santa+Marta',
    description: 'Hotel boutique en Santa Marta, con diseño caribeño y piscina infinita.',
    amenities: ['WiFi', 'Piscina', 'Bar', 'Acceso a playa']
  },
  {
    id: 17,
    name: 'Hotel Casa Deco Armenia',
    location: 'Armenia',
    price: 500000,
    rating: 4.3,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Casa+Deco+Armenia',
    description: 'Hotel moderno en Armenia, con habitaciones cómodas y servicio personalizado.',
    amenities: ['WiFi', 'Desayuno', 'Estacionamiento', 'Terraza']
  },
  {
    id: 18,
    name: 'Hotel San Antonio Plaza',
    location: 'Popayán',
    price: 400000,
    rating: 4.0,
    image: 'https://via.placeholder.com/300x200?text=Hotel+San+Antonio+Plaza',
    description: 'Hotel en el centro histórico de Popayán, con arquitectura colonial.',
    amenities: ['WiFi', 'Desayuno', 'Patio', 'Guías']
  },
  {
    id: 19,
    name: 'Hotel Dann Monasterio',
    location: 'Cartagena',
    price: 1300000,
    rating: 4.8,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Dann+Monasterio',
    description: 'Hotel de lujo en Cartagena, en un monasterio histórico con spa y piscina.',
    amenities: ['WiFi', 'Piscina', 'Spa', 'Restaurante', 'Bar']
  },
  {
    id: 20,
    name: 'Hotel Casa Deco Medellín',
    location: 'Medellín',
    price: 680000,
    rating: 4.5,
    image: 'https://via.placeholder.com/300x200?text=Hotel+Casa+Deco+Medellín',
    description: 'Hotel boutique en Medellín, con diseño urbano y comodidades modernas.',
    amenities: ['WiFi', 'Desayuno', 'Bar', 'Terraza']
  }
];