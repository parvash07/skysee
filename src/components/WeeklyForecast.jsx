import { getDayName } from '../utils/helpers';
import { WeatherIcon } from './Icons';

export default function WeeklyForecast({ daily }) {
  if (!daily) return null;

  const days = daily.time.map((time, idx) => ({
    time,
    dayName: getDayName(time, idx),
    code: daily.weather_code[idx],
    high: Math.round(daily.temperature_2m_max[idx]),
    low: Math.round(daily.temperature_2m_min[idx]),
    rain: daily.precipitation_probability_max[idx],
  }));

  return (
    <div className="weekly">
      <h2 className="section-title">This Week</h2>
      <div className="weekly__list">
        {days.map((day, idx) => (
          <div key={day.time} className="weekly__item">
            <span className={`weekly__day ${idx === 0 ? 'weekly__day--today' : ''}`}>
              {day.dayName}
            </span>
            <span className="weekly__icon">
              <WeatherIcon code={day.code} size={18} />
            </span>
            <span className="weekly__rain">
              {day.rain > 0 ? `${day.rain}%` : ''}
            </span>
            <span className="weekly__temps">
              <span className="weekly__temp-high">{day.high}°</span>
              <span className="weekly__temp-separator">/</span>
              <span className="weekly__temp-low">{day.low}°</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
