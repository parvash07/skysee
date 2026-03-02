import { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { fetchWeather, fetchAirQuality } from './utils/api';
import Header from './components/Header';
import LocationSearch from './components/LocationSearch';
import CurrentWeather from './components/CurrentWeather';
import RainInfo from './components/RainInfo';
import ClothingAdvice from './components/ClothingAdvice';
import WeatherDetails from './components/WeatherDetails';
import HourlyForecast from './components/HourlyForecast';
import WeeklyForecast from './components/WeeklyForecast';
import { CloudIcon } from './components/Icons';
import './index.css';

function WeatherApp() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadWeather = useCallback(async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const [weatherData, aqiData] = await Promise.all([
        fetchWeather(lat, lon),
        fetchAirQuality(lat, lon).catch(() => null),
      ]);
      setWeather(weatherData);
      setAqi(aqiData?.current?.us_aqi ?? null);
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError('could not load weather data');
      setWeather(null);
      setAqi(null);
    }
    setLoading(false);
  }, []);

  const handleSelectLocation = useCallback((loc) => {
    setLocation(loc);
    loadWeather(loc.latitude, loc.longitude);
  }, [loadWeather]);

  const handleRetry = () => {
    if (location) {
      loadWeather(location.latitude, location.longitude);
    }
  };

  const handleReset = () => {
    setLocation(null);
    setWeather(null);
    setAqi(null);
    setError(null);
  };

  return (
    <div className="app">
      <Header onReset={handleReset} />
      <LocationSearch onSelectLocation={handleSelectLocation} />

      {/* Loading State */}
      {loading && (
        <div className="loading">
          <div className="loading__dots">
            <span className="loading__dot" />
            <span className="loading__dot" />
            <span className="loading__dot" />
          </div>
          <span className="loading__text">fetching weather...</span>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="error">
          <p className="error__message">{error}</p>
          <button className="error__retry" onClick={handleRetry}>
            try again
          </button>
        </div>
      )}

      {/* Landing State */}
      {!location && !loading && !error && (
        <div className="landing">
          <div className="landing__icon">
            <CloudIcon size={80} strokeWidth={0.75} />
          </div>
          <h2 className="landing__title">Minimal Weather</h2>
          <p className="landing__subtitle">
            search for a city to see today's weather, what to wear, and the week ahead
          </p>
        </div>
      )}

      {/* Weather Content */}
      {weather && !loading && !error && (
        <>
          {/* Location label */}
          {location && (
            <div className="location-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                {location.name}
                {location.country ? `, ${location.country}` : ''}
              </span>
            </div>
          )}

          <CurrentWeather current={weather.current} />
          <RainInfo hourly={weather.hourly} />

          <div className="dot-divider">
            <span /><span /><span />
          </div>

          <ClothingAdvice current={weather.current} />
          <WeatherDetails current={weather.current} aqi={aqi} />

          <div className="divider" />

          <HourlyForecast hourly={weather.hourly} />

          <div className="divider" />

          <WeeklyForecast daily={weather.daily} />

          <footer className="footer">
            skysee · open-meteo api
          </footer>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <WeatherApp />
    </ThemeProvider>
  );
}
