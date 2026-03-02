// SkySee — Helper Utilities

/**
 * WMO Weather Code to description & icon mapping
 */
export const WEATHER_CODES = {
  0: { description: 'clear sky', icon: 'sun' },
  1: { description: 'mainly clear', icon: 'sun' },
  2: { description: 'partly cloudy', icon: 'cloud-sun' },
  3: { description: 'overcast', icon: 'cloud' },
  45: { description: 'foggy', icon: 'cloud-fog' },
  48: { description: 'rime fog', icon: 'cloud-fog' },
  51: { description: 'light drizzle', icon: 'cloud-drizzle' },
  53: { description: 'moderate drizzle', icon: 'cloud-drizzle' },
  55: { description: 'dense drizzle', icon: 'cloud-drizzle' },
  56: { description: 'freezing drizzle', icon: 'cloud-drizzle' },
  57: { description: 'freezing drizzle', icon: 'cloud-drizzle' },
  61: { description: 'light rain', icon: 'cloud-rain' },
  63: { description: 'moderate rain', icon: 'cloud-rain' },
  65: { description: 'heavy rain', icon: 'cloud-rain' },
  66: { description: 'freezing rain', icon: 'cloud-rain' },
  67: { description: 'freezing rain', icon: 'cloud-rain' },
  71: { description: 'light snow', icon: 'cloud-snow' },
  73: { description: 'moderate snow', icon: 'cloud-snow' },
  75: { description: 'heavy snow', icon: 'cloud-snow' },
  77: { description: 'snow grains', icon: 'cloud-snow' },
  80: { description: 'light showers', icon: 'cloud-rain' },
  81: { description: 'moderate showers', icon: 'cloud-rain' },
  82: { description: 'heavy showers', icon: 'cloud-rain' },
  85: { description: 'light snow showers', icon: 'cloud-snow' },
  86: { description: 'heavy snow showers', icon: 'cloud-snow' },
  95: { description: 'thunderstorm', icon: 'cloud-lightning' },
  96: { description: 'thunderstorm with hail', icon: 'cloud-lightning' },
  99: { description: 'thunderstorm with hail', icon: 'cloud-lightning' },
};

export function getWeatherInfo(code) {
  return WEATHER_CODES[code] || { description: 'unknown', icon: 'cloud' };
}

/**
 * Get clothing recommendations based on temperature and conditions
 */
export function getClothingAdvice(tempC, weatherCode, windSpeed) {
  const items = [];
  const isRainy = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode);
  const isSnowy = [71, 73, 75, 77, 85, 86].includes(weatherCode);
  const isWindy = windSpeed > 20;

  if (tempC <= 0) {
    items.push({ key: 'heavy-coat', label: 'heavy coat' });
    items.push({ key: 'scarf', label: 'scarf' });
    items.push({ key: 'pants', label: 'warm pants' });
    items.push({ key: 'boots', label: 'boots' });
  } else if (tempC <= 10) {
    items.push({ key: 'jacket', label: 'jacket' });
    items.push({ key: 'long-sleeve', label: 'layers' });
    items.push({ key: 'pants', label: 'pants' });
  } else if (tempC <= 18) {
    items.push({ key: 'jacket', label: 'light jacket' });
    items.push({ key: 'long-sleeve', label: 'long sleeve' });
    items.push({ key: 'pants', label: 'jeans' });
  } else if (tempC <= 25) {
    items.push({ key: 'tshirt', label: 't-shirt' });
    items.push({ key: 'pants', label: 'light pants' });
  } else {
    items.push({ key: 'tshirt', label: 't-shirt' });
    items.push({ key: 'shorts', label: 'shorts' });
    items.push({ key: 'sunglasses', label: 'sunglasses' });
  }

  if (isRainy) {
    items.push({ key: 'umbrella', label: 'umbrella' });
  }

  if (isSnowy && tempC > 0) {
    items.push({ key: 'boots', label: 'boots' });
  }

  if (isWindy && tempC > 10) {
    items.push({ key: 'jacket', label: 'windbreaker' });
  }

  // Deduplicate by key
  const seen = new Set();
  return items.filter(item => {
    if (seen.has(item.key)) return false;
    seen.add(item.key);
    return true;
  });
}

/**
 * Get AQI label
 */
export function getAqiLabel(aqi) {
  if (aqi <= 50) return 'good';
  if (aqi <= 100) return 'moderate';
  if (aqi <= 150) return 'unhealthy*';
  if (aqi <= 200) return 'unhealthy';
  if (aqi <= 300) return 'very unhealthy';
  return 'hazardous';
}

/**
 * Format time from ISO string
 */
export function formatTime(isoString) {
  const date = new Date(isoString);
  const hours = date.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const h = hours % 12 || 12;
  return `${h}${ampm}`;
}

/**
 * Get day name from ISO date string
 */
export function getDayName(isoString, index) {
  if (index === 0) return 'today';
  if (index === 1) return 'tomorrow';
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
}

/**
 * Debounce utility
 */
export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Get rain probability description
 */
export function getRainDescription(probability) {
  if (probability <= 10) return 'no rain expected';
  if (probability <= 30) return 'slight chance of rain';
  if (probability <= 60) return 'rain likely';
  if (probability <= 80) return 'rain expected';
  return 'heavy rain expected';
}
