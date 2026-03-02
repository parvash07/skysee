import { formatTime } from '../utils/helpers';
import { WeatherIcon } from './Icons';

export default function HourlyForecast({ hourly }) {
  if (!hourly) return null;

  // Get next 24 hours starting from current hour
  const now = new Date();
  const currentHourIndex = hourly.time.findIndex(t => new Date(t) >= now);
  const startIndex = Math.max(0, currentHourIndex);
  const hours = [];

  for (let i = startIndex; i < Math.min(startIndex + 24, hourly.time.length); i++) {
    hours.push({
      time: hourly.time[i],
      temp: Math.round(hourly.temperature_2m[i]),
      code: hourly.weather_code[i],
      isDay: hourly.is_day[i] === 1,
      isNow: i === startIndex,
    });
  }

  if (hours.length === 0) return null;

  return (
    <div className="hourly">
      <h2 className="section-title">Hourly</h2>
      <div className="hourly__scroll">
        {hours.map((hour, idx) => (
          <div
            key={hour.time}
            className={`hourly__item ${hour.isNow ? 'hourly__item--now' : ''}`}
          >
            <span className="hourly__time">
              {hour.isNow ? 'now' : formatTime(hour.time)}
            </span>
            <span className="hourly__icon">
              <WeatherIcon code={hour.code} isDay={hour.isDay} size={18} />
            </span>
            <span className="hourly__temp">{hour.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}
