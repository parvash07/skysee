// SkySee — API Utility

const WEATHER_BASE = 'https://api.open-meteo.com/v1/forecast';
const AQI_BASE = 'https://air-quality-api.open-meteo.com/v1/air-quality';
const GEO_BASE = 'https://geocoding-api.open-meteo.com/v1/search';

/**
 * Search for cities by name
 */
export async function searchCities(query) {
  if (!query || query.length < 2) return [];

  const res = await fetch(
    `${GEO_BASE}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`
  );

  if (!res.ok) throw new Error('Failed to search cities');

  const data = await res.json();
  return (data.results || []).map(city => ({
    id: city.id,
    name: city.name,
    country: city.country || '',
    countryCode: city.country_code || '',
    admin1: city.admin1 || '',
    latitude: city.latitude,
    longitude: city.longitude,
  }));
}

/**
 * Reverse geocode coordinates to city name
 */
export async function reverseGeocode(lat, lon) {
  const res = await fetch(
    `${GEO_BASE}?name=&count=1&language=en&format=json&latitude=${lat}&longitude=${lon}`
  );
  
  return { name: 'Current Location', latitude: lat, longitude: lon, country: '' };
}

/**
 * Fetch weather data
 */
export async function fetchWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'precipitation',
      'rain',
      'weather_code',
      'wind_speed_10m',
      'is_day',
    ].join(','),
    hourly: [
      'temperature_2m',
      'weather_code',
      'precipitation_probability',
      'is_day',
    ].join(','),
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_probability_max',
      'sunrise',
      'sunset',
    ].join(','),
    timezone: 'auto',
    forecast_days: 7,
  });

  const res = await fetch(`${WEATHER_BASE}?${params}`);
  if (!res.ok) throw new Error('Failed to fetch weather');
  return res.json();
}

/**
 * Fetch air quality index
 */
export async function fetchAirQuality(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: 'us_aqi',
  });

  const res = await fetch(`${AQI_BASE}?${params}`);
  if (!res.ok) throw new Error('Failed to fetch AQI');
  return res.json();
}
