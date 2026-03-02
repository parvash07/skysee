import { getAqiLabel } from '../utils/helpers';
import { WindIcon, DropletsIcon, ThermometerIcon, GaugeIcon } from './Icons';

export default function WeatherDetails({ current, aqi }) {
  if (!current) return null;

  const details = [
    {
      icon: <WindIcon size={16} />,
      label: 'wind',
      value: Math.round(current.wind_speed_10m),
      unit: 'km/h',
    },
    {
      icon: <DropletsIcon size={16} />,
      label: 'humidity',
      value: current.relative_humidity_2m,
      unit: '%',
    },
    {
      icon: <ThermometerIcon size={16} />,
      label: 'feels like',
      value: Math.round(current.apparent_temperature),
      unit: '°',
    },
    {
      icon: <GaugeIcon size={16} />,
      label: 'aqi',
      value: aqi ?? '—',
      unit: aqi ? getAqiLabel(aqi) : '',
    },
  ];

  return (
    <div className="details">
      {details.map((d) => (
        <div key={d.label} className="details__card">
          <div className="details__card-header">
            {d.icon}
            <span>{d.label}</span>
          </div>
          <div className="details__card-value">
            {d.value}
            <span className="details__card-unit"> {d.unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
