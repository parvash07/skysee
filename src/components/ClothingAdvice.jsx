import { getClothingAdvice } from '../utils/helpers';
import { ClothingIcon } from './Icons';

export default function ClothingAdvice({ current }) {
  if (!current) return null;

  const items = getClothingAdvice(
    current.temperature_2m,
    current.weather_code,
    current.wind_speed_10m
  );

  if (items.length === 0) return null;

  return (
    <div className="clothing">
      <h2 className="clothing__title">What to Wear</h2>
      <div className="clothing__items">
        {items.map((item) => (
          <div key={item.key} className="clothing__item">
            <ClothingIcon type={item.key} size={28} />
            <span className="clothing__item-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
