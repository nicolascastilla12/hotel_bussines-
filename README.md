<<<<<<< HEAD
# Hotel Booking App

A React application for booking hotels with search and filter functionality.

## Features

- Search hotels by location
- Filter by price range
- Advanced forms with date pickers
- Dynamic filters
- Book rooms with date selection

## Technologies Used

- React
- TypeScript
- Vite
- react-datepicker

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# hotel_bussines-
>>>>>>> 752ab97e9640549556607c7172943043d912f5cc
