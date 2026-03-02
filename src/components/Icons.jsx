// SkySee — SVG Icon Components
// All icons: outline-only, black & white, Nothing UI aesthetic

import { getWeatherInfo } from '../utils/helpers';

function Icon({ size = 24, strokeWidth = 1.5, children, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

/* ======================== */
/*    WEATHER ICONS         */
/* ======================== */

export function SunIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </Icon>
  );
}

export function MoonIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </Icon>
  );
}

export function CloudIcon(props) {
  return (
    <Icon {...props}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </Icon>
  );
}

export function CloudSunIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </Icon>
  );
}

export function CloudRainIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </Icon>
  );
}

export function CloudDrizzleIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M8 15v2" />
      <path d="M8 21v2" />
      <path d="M12 13v2" />
      <path d="M12 19v2" />
      <path d="M16 15v2" />
      <path d="M16 21v2" />
    </Icon>
  );
}

export function CloudSnowIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M8 15h.01" />
      <path d="M8 19h.01" />
      <path d="M12 17h.01" />
      <path d="M12 21h.01" />
      <path d="M16 15h.01" />
      <path d="M16 19h.01" />
    </Icon>
  );
}

export function CloudLightningIcon(props) {
  return (
    <Icon {...props}>
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </Icon>
  );
}

export function CloudFogIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 17H7" />
      <path d="M17 21H9" />
    </Icon>
  );
}

export function WindIcon(props) {
  return (
    <Icon {...props}>
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </Icon>
  );
}

export function DropletsIcon(props) {
  return (
    <Icon {...props}>
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </Icon>
  );
}

/* ======================== */
/*    CLOTHING ICONS        */
/* ======================== */

export function TShirtIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15.5 2H17l4 4-3 2v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8L3 6l4-4h1.5" />
      <path d="M8.5 2a3.5 3.5 0 0 0 7 0" />
    </svg>
  );
}

export function LongSleeveIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15.5 2H17l4 4-1 8h-2.5l-.5-4v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10l-.5 4H3l-1-8 4-4h1.5" />
      <path d="M8.5 2a3.5 3.5 0 0 0 7 0" />
    </svg>
  );
}

export function JacketIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15.5 2H17l4 4-1.5 8H17v6a1 1 0 0 1-1 1h-4v-9" />
      <path d="M8.5 2H7L3 6l1.5 8H7v6a1 1 0 0 0 1 1h4v-9" />
      <path d="M8.5 2a3.5 3.5 0 0 0 7 0" />
      <line x1="12" y1="12" x2="12" y2="21" />
    </svg>
  );
}

export function HeavyCoatIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15.5 2H17l4 4-2 10h-1v4a1 1 0 0 1-1 1h-4v-9" />
      <path d="M8.5 2H7L3 6l2 10h1v4a1 1 0 0 0 1 1h4v-9" />
      <path d="M8.5 2a3.5 3.5 0 0 0 7 0" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M7 14h10" />
    </svg>
  );
}

export function ShortsIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 6h14a1 1 0 0 1 1 1v3l-4 6h-2l-2-4-2 4H8L4 10V7a1 1 0 0 1 1-1z" />
      <line x1="12" y1="6" x2="12" y2="12" />
    </svg>
  );
}

export function PantsIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 3h14a1 1 0 0 1 1 1v2l-3 15h-3l-2-10-2 10H7L4 6V4a1 1 0 0 1 1-1z" />
      <line x1="12" y1="3" x2="12" y2="11" />
    </svg>
  );
}

export function ScarfIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 3h12c1 0 2 1 2 2v2c0 1-1 2-2 2H6C5 9 4 8 4 7V5c0-1 1-2 2-2z" />
      <path d="M14 9v8a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-2" />
      <path d="M12 19v2" />
      <path d="M10 19v2" />
    </svg>
  );
}

export function UmbrellaIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 12a10.06 10.06 0 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v2" />
    </svg>
  );
}

export function SunglassesIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="7" cy="14" r="4" />
      <circle cx="17" cy="14" r="4" />
      <path d="M11 14h2" />
      <path d="M3 14l-1-6h20l-1 6" />
    </svg>
  );
}

export function BootsIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 3v9l-3 4v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2l-1-2V3" />
      <path d="M7 3h6" />
      <path d="M4 16h10" />
    </svg>
  );
}

/* ======================== */
/*    UI ICONS              */
/* ======================== */

export function SearchIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </Icon>
  );
}

export function MapPinIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  );
}

export function CrosshairIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="22" y1="12" x2="18" y2="12" />
      <line x1="6" y1="12" x2="2" y2="12" />
      <line x1="12" y1="6" x2="12" y2="2" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </Icon>
  );
}

export function XIcon(props) {
  return (
    <Icon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Icon>
  );
}

export function ThermometerIcon(props) {
  return (
    <Icon {...props}>
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </Icon>
  );
}

export function GaugeIcon(props) {
  return (
    <Icon {...props}>
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </Icon>
  );
}

export function EyeIcon(props) {
  return (
    <Icon {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );
}

/* ======================== */
/*    WEATHER ICON MAPPER   */
/* ======================== */

const weatherIconMap = {
  'sun': SunIcon,
  'cloud-sun': CloudSunIcon,
  'cloud': CloudIcon,
  'cloud-rain': CloudRainIcon,
  'cloud-drizzle': CloudDrizzleIcon,
  'cloud-snow': CloudSnowIcon,
  'cloud-lightning': CloudLightningIcon,
  'cloud-fog': CloudFogIcon,
};

export function WeatherIcon({ code, isDay = true, size = 24, ...props }) {
  const info = getWeatherInfo(code);
  let iconKey = info.icon;

  // Use moon icon for clear night
  if (!isDay && (iconKey === 'sun')) {
    const IconComponent = MoonIcon;
    return <IconComponent size={size} {...props} />;
  }

  const IconComponent = weatherIconMap[iconKey] || CloudIcon;
  return <IconComponent size={size} {...props} />;
}

/* ======================== */
/*   CLOTHING ICON MAPPER   */
/* ======================== */

const clothingIconMap = {
  'tshirt': TShirtIcon,
  'long-sleeve': LongSleeveIcon,
  'jacket': JacketIcon,
  'heavy-coat': HeavyCoatIcon,
  'shorts': ShortsIcon,
  'pants': PantsIcon,
  'scarf': ScarfIcon,
  'umbrella': UmbrellaIcon,
  'sunglasses': SunglassesIcon,
  'boots': BootsIcon,
};

export function ClothingIcon({ type, size = 24, ...props }) {
  const IconComponent = clothingIconMap[type] || TShirtIcon;
  return <IconComponent size={size} {...props} />;
}
