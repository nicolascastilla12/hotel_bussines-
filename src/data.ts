import type { Hotel } from './types';

export const mockHotels: Hotel[] = [
  {
    id: 1,
    name: 'Nicolas Luxury Suites',
    location: 'Bogotá',
    price: 1000000,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Suites de lujo en el corazón de Bogotá con comodidades modernas y vistas panorámicas.',
    amenities: ['WiFi', 'Piscina', 'Gimnasio', 'Spa', 'Restaurante']
  },
  {
    id: 2,
    name: 'Casa Deco Hotel',
    location: 'Bogotá',
    price: 850000,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel boutique en el centro histórico de Bogotá, con diseño contemporáneo y arte local.',
    amenities: ['WiFi', 'Desayuno', 'Bar', 'Terraza']
  },
  {
    id: 3,
    name: 'Hotel de la Opera',
    location: 'Bogotá',
    price: 1200000,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel de lujo en el centro de Bogotá, cercano a teatros y restaurantes.',
    amenities: ['WiFi', 'Piscina', 'Spa', 'Concierge']
  },
  {
    id: 4,
    name: 'Diez Hotel',
    location: 'Medellín',
    price: 720000,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel moderno en el corazón de Medellín, con diseño innovador y vistas a la ciudad.',
    amenities: ['WiFi', 'Desayuno', 'Piscina', 'Bar']
  },
  {
    id: 5,
    name: 'Hotel Poblado Plaza',
    location: 'Medellín',
    price: 650000,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel cómodo en el barrio El Poblado, ideal para negocios y turismo.',
    amenities: ['WiFi', 'Estacionamiento', 'Gimnasio', 'Restaurante']
  },
  {
    id: 6,
    name: 'Sofitel Legend Santa Clara',
    location: 'Cartagena',
    price: 1500000,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel histórico de lujo en Cartagena, con arquitectura colonial y spa exclusivo.',
    amenities: ['WiFi', 'Piscina', 'Spa', 'Acceso a playa', 'Restaurante']
  },
  {
    id: 7,
    name: 'Hotel Santa Clara',
    location: 'Cartagena',
    price: 880000,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Convento convertido en hotel boutique en el centro histórico de Cartagena.',
    amenities: ['WiFi', 'Piscina', 'Patio', 'Bar']
  },
  {
    id: 8,
    name: 'InterContinental Cali',
    location: 'Cali',
    price: 480000,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel de negocios en Cali, con instalaciones modernas y servicio de alta calidad.',
    amenities: ['WiFi', 'Piscina', 'Gimnasio', 'Restaurante']
  },
  {
    id: 9,
    name: 'Hotel Dann Carlton',
    location: 'Cali',
    price: 550000,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel tradicional en el centro de Cali, con historia y comodidad.',
    amenities: ['WiFi', 'Desayuno', 'Bar', 'Estacionamiento']
  },
  {
    id: 10,
    name: 'Hotel El Prado',
    location: 'Barranquilla',
    price: 640000,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel icónico en Barranquilla, con arquitectura art deco y encanto histórico.',
    amenities: ['WiFi', 'Piscina', 'Restaurante', 'Bar']
  },
  {
    id: 11,
    name: 'Hotel Casa Deco Bucaramanga',
    location: 'Bucaramanga',
    price: 560000,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel boutique en Bucaramanga, con diseño elegante y vistas a las montañas.',
    amenities: ['WiFi', 'Desayuno', 'Terraza', 'Senderismo']
  },
  {
    id: 12,
    name: 'Hotel Movich Pereira',
    location: 'Pereira',
    price: 520000,
    rating: 4.1,
    image: 'https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel moderno en Pereira, en el eje cafetero, con comodidades para viajeros.',
    amenities: ['WiFi', 'Desayuno', 'Gimnasio', 'Guías turísticos']
  },
  {
    id: 13,
    name: 'Hotel Irotama Resort',
    location: 'Santa Marta',
    price: 760000,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Resort en Santa Marta, cerca del Parque Tayrona, con playas privadas.',
    amenities: ['WiFi', 'Piscina', 'Acceso a playa', 'Spa']
  },
  {
    id: 14,
    name: 'Hotel Estelar La Fontana',
    location: 'Armenia',
    price: 450000,
    rating: 4.2,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel en Armenia, en el Quindío, con jardines y cafeterías cercanas.',
    amenities: ['WiFi', 'Desayuno', 'Piscina', 'Jardín']
  },
  {
    id: 15,
    name: 'Hotel Hacienda Venecia',
    location: 'Salento',
    price: 600000,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hacienda colonial en Salento, ideal para turismo rural y naturaleza.',
    amenities: ['WiFi', 'Desayuno', 'Cabalgatas', 'Senderismo']
  },
  {
    id: 16,
    name: 'Hotel Charleston Santa Marta',
    location: 'Santa Marta',
    price: 700000,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel boutique en Santa Marta, con diseño caribeño y piscina infinita.',
    amenities: ['WiFi', 'Piscina', 'Bar', 'Acceso a playa']
  },
  {
    id: 17,
    name: 'Hotel Casa Deco Armenia',
    location: 'Armenia',
    price: 500000,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel moderno en Armenia, con habitaciones cómodas y servicio personalizado.',
    amenities: ['WiFi', 'Desayuno', 'Estacionamiento', 'Terraza']
  },
  {
    id: 18,
    name: 'Hotel San Antonio Plaza',
    location: 'Popayán',
    price: 400000,
    rating: 4.0,
    image: 'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel en el centro histórico de Popayán, con arquitectura colonial.',
    amenities: ['WiFi', 'Desayuno', 'Patio', 'Guías']
  },
  {
    id: 19,
    name: 'Hotel Dann Monasterio',
    location: 'Cartagena',
    price: 1300000,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2869232/pexels-photo-2869232.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel de lujo en Cartagena, en un monasterio histórico con spa y piscina.',
    amenities: ['WiFi', 'Piscina', 'Spa', 'Restaurante', 'Bar']
  },
  {
    id: 20,
    name: 'Hotel Casa Deco Medellín',
    location: 'Medellín',
    price: 680000,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Hotel boutique en Medellín, con diseño urbano y comodidades modernas.',
    amenities: ['WiFi', 'Desayuno', 'Bar', 'Terraza']
  }
];