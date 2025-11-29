import { useState, useEffect } from 'react';

/**
 * Tiny hook to sync state with localStorage
 * key: storage key
 * initialValue: default value (object/array/primitive)
 */
export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch (e) {
      console.warn('useLocalStorage parse error', e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.warn('useLocalStorage set error', e);
    }
  }, [key, state]);

  return [state, setState];
}