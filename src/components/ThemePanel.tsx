import React, { createContext, useContext, useEffect, useState } from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';
import { themeConfig, type ThemeConfig } from '../themeConfig';

const ThemeContext = createContext<ThemeConfig>(themeConfig);
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-font', themeConfig.fontFamily);
    document.documentElement.style.setProperty('--theme-size-hero', themeConfig.fontSizeHero);
    document.documentElement.style.setProperty('--theme-size-section', themeConfig.fontSizeSectionTitle);
    document.documentElement.style.setProperty('--theme-size-card', themeConfig.fontSizeCardTitle);
    document.documentElement.style.setProperty('--theme-size-body', themeConfig.fontSizeBody);
    document.documentElement.style.setProperty('--theme-size-meta', themeConfig.fontSizeMeta);
  }, []);

  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
}

type ColorMode = 'system' | 'light' | 'dark';

const modes: { mode: ColorMode; label: string; Icon: React.ElementType }[] = [
  { mode: 'system', label: 'System theme', Icon: Monitor },
  { mode: 'light', label: 'Light theme', Icon: Sun },
  { mode: 'dark', label: 'Dark theme', Icon: Moon },
];

// System follows prefers-color-scheme; light/dark pin `data-theme` on <html>.
// index.html applies the stored choice before first paint.
export function ThemeToggle() {
  const [mode, setMode] = useState<ColorMode>(() => {
    try {
      const stored = localStorage.getItem('theme');
      return stored === 'light' || stored === 'dark' ? stored : 'system';
    } catch {
      return 'system';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', mode);
    try {
      if (mode === 'system') localStorage.removeItem('theme');
      else localStorage.setItem('theme', mode);
    } catch {}
  }, [mode]);

  return (
    <div className="flex items-center gap-0.5 p-0.5 rounded-full border border-rule bg-card" role="radiogroup" aria-label="Color theme">
      {modes.map(({ mode: m, label, Icon }) => (
        <button
          key={m}
          type="button"
          role="radio"
          aria-checked={mode === m}
          aria-label={label}
          title={label}
          onClick={() => setMode(m)}
          className={`w-7 h-7 grid place-items-center rounded-full transition-colors ${
            mode === m ? 'bg-head text-fg' : 'text-muted hover:text-accent'
          }`}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
