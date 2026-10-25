import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  // Read the stored preference after mount so server and client markup match.
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setIsDark(
      saved
        ? saved === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return { isDark, toggle };
}
