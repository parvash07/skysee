import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

export default function Header({ onReset }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1 className="header__logo" onClick={onReset} style={{ cursor: 'pointer' }}>
        Sky<span>See</span>
      </h1>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
      </button>
    </header>
  );
}
