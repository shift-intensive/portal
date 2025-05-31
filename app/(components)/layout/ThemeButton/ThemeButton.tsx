'use client';

import { MoonIcon, SunIcon } from 'lucide-react';

import { setTheme, themeContext } from '@/app/(contexts)/theme';
import { Button } from '@/components/ui';

export const ThemeButton = () => {
  const theme = themeContext.useSelect();

  const onThemeClick = () => {
    const updatedTheme = theme.value === 'dark' ? 'light' : 'dark';
    setTheme(updatedTheme);
    theme.set(updatedTheme);
  };

  return (
    <Button size='icon' variant='ghost' onClick={onThemeClick}>
      {theme.value === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
