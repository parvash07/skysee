import { getWeatherInfo, getRainDescription } from '../utils/helpers';
import { WeatherIcon } from './Icons';

export default function CurrentWeather({ current }) {
  if (!current) return null;

  const temp = Math.round(current.temperature_2m);
  const feelsLike = Math.round(current.apparent_temperature);
  const weatherInfo = getWeatherInfo(current.weather_code);
  const isDay = current.is_day === 1;

  return (
    <div className="current-weather">
      <div className="current-weather__icon">
        <WeatherIcon code={current.weather_code} isDay={isDay} size={64} />
      </div>
      <div className="current-weather__temp">
        {temp}<sup>°</sup>
      </div>
      <div className="current-weather__condition">
        {weatherInfo.description}
      </div>
      <div className="current-weather__feels">
        feels like {feelsLike}°
      </div>
    </div>
  );
}
