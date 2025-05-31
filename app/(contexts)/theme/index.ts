import { createContext, setCookie } from '@siberiacancode/reactuse';

export type ThemeContextValue = 'dark' | 'light';

export const themeContext = createContext<ThemeContextValue>('light');

export const setTheme = (theme: 'dark' | 'light') => {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  setCookie('theme', theme);
};
