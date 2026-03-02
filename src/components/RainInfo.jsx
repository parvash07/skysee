import { getRainDescription } from '../utils/helpers';
import { DropletsIcon } from './Icons';

export default function RainInfo({ hourly }) {
  if (!hourly) return null;

  // Get max rain probability for today (next 12 hours)
  const now = new Date();
  const currentHourIndex = hourly.time.findIndex(t => new Date(t) >= now);
  const next12Hours = hourly.precipitation_probability.slice(
    Math.max(0, currentHourIndex),
    currentHourIndex + 12
  );
  const maxRainProb = Math.max(...next12Hours, 0);
  const description = getRainDescription(maxRainProb);

  const dotLevel = maxRainProb <= 10 ? 'low' : maxRainProb <= 50 ? 'medium' : 'high';

  return (
    <div className="rain-info">
      <span className={`rain-info__dot rain-info__dot--${dotLevel}`} />
      <DropletsIcon size={14} />
      <span>{description}</span>
      <span style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>
        {maxRainProb}%
      </span>
    </div>
  );
}
