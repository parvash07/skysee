import { useState, useCallback, useRef, useEffect } from 'react';
import { searchCities } from '../utils/api';
import { debounce } from '../utils/helpers';
import { SearchIcon, CrosshairIcon, XIcon, MapPinIcon } from './Icons';

export default function LocationSearch({ onSelectLocation }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Debounced search
  const debouncedSearch = useCallback(
    debounce(async (q) => {
      if (q.length < 2) {
        setResults([]);
        setShowResults(false);
        setIsSearching(false);
        return;
      }
      try {
        const cities = await searchCities(q);
        setResults(cities);
        setShowResults(true);
      } catch (err) {
        console.error('Search error:', err);
        setResults([]);
      }
      setIsSearching(false);
    }, 350),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsSearching(true);
    debouncedSearch(value);
  };

  const handleSelectCity = (city) => {
    setQuery(city.name);
    setShowResults(false);
    setResults([]);
    onSelectLocation({
      name: city.name,
      country: city.country,
      countryCode: city.countryCode,
      admin1: city.admin1,
      latitude: city.latitude,
      longitude: city.longitude,
    });
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
    inputRef.current?.focus();
  };

  const handleLocate = () => {
    if (!navigator.geolocation) return;
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setQuery('Current Location');
        setShowResults(false);
        onSelectLocation({
          name: 'Current Location',
          country: '',
          latitude,
          longitude,
        });
        setIsLocating(false);
      },
      (err) => {
        console.error('Geolocation error:', err);
        setIsLocating(false);
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  };

  return (
    <div className="search" ref={wrapperRef}>
      <div className="search__input-wrapper">
        <SearchIcon size={16} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
        <input
          ref={inputRef}
          type="text"
          className="search__input"
          placeholder="search city..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => results.length > 0 && setShowResults(true)}
        />
        {query && (
          <button className="search__clear" onClick={handleClear} aria-label="Clear search">
            <XIcon size={14} />
          </button>
        )}
        <button
          className="search__btn search__btn--locate"
          onClick={handleLocate}
          aria-label="Use current location"
          disabled={isLocating}
          style={isLocating ? { animation: 'spin 1s linear infinite' } : {}}
        >
          <CrosshairIcon size={16} />
        </button>
      </div>

      {showResults && (
        <div className="search__results">
          {results.length === 0 && !isSearching ? (
            <div className="search__no-results">no cities found</div>
          ) : (
            results.map((city) => (
              <div
                key={city.id}
                className="search__result-item"
                onClick={() => handleSelectCity(city)}
              >
                <MapPinIcon size={14} />
                <div>
                  <span className="search__result-name">{city.name}</span>
                  {city.admin1 && <span className="search__result-country">, {city.admin1}</span>}
                  <span className="search__result-country"> — {city.country}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
