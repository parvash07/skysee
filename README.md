# SkySee ◐

> A minimal, fast weather PWA built with React and Vite. 
> 
> [**View Live Demo**](https://skysee.vercel.app/))

SkySee is a frontend application that provides real-time weather data, air quality indices, and contextual clothing recommendations. It relies entirely on the free Open-Meteo API, meaning there are no API keys or rate limits to worry about during development.

I built this project to focus on clean UI/UX, responsive design using native CSS custom properties, and reliable offline capabilities via a custom Service Worker.

<br />

## Tech Stack

- **Core:** React 18 + Vite
- **Styling:** Vanilla CSS (extensive use of CSS variables for theming)
- **Data:** [Open-Meteo API](https://open-meteo.com/) (Forecast, AQI, Geocoding)
- **Architecture:** Progressive Web App (PWA) with offline caching

## Features

- **Current & Forecast:** Real-time metrics alongside a 24-hour horizontal scroll and a 7-day outlook.
- **Contextual Advice:** Suggests specific clothing items (e.g., umbrella, windbreaker) based on the current temperature and wind speed.
- **Air Quality:** Real-time US AQI data integration.
- **Location Support:** Fast city search with debouncing, plus native browser Geolocation API fallback.
- **Theming:** First-class light/dark mode that respects system preferences and persists locally.
- **Offline Capable:** Service worker caches static assets, fonts, and falls back to cached API responses when offline.

## Running Locally

Because this uses the open-source Open-Meteo API, **no `.env` file or API keys are required**. You can clone and run it immediately.

```bash
# Clone the repository
git clone https://github.com/parvash07/skysee.git
cd skysee

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` to view the app.

## Project Structure

A quick look at the core structure:

```text
src/
├── components/   # Presentational components (CurrentWeather, HourlyForecast, etc.)
├── context/      # ThemeContext for global dark/light mode state
├── utils/        # API helpers and data formatting utilities
├── App.jsx       # Main layout and data fetching logic
└── index.css     # Global design system, tokens, and utility classes
```

## Deployment

The app is built with Vite and is ready to be dropped into Vercel, Netlify, or GitHub Pages.

```bash
npm run build
```
This generates a minified production build in the `dist` directory. For Vercel, simply connect the repository and use the default Vite build settings.

## License

Designed and developed by [Parvash](https://github.com/parvash07).  
Weather data provided by [Open-Meteo](https://open-meteo.com/).
