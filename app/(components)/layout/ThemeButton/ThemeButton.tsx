'use client';

import { MoonIcon, SunIcon } from 'lucide-react';

import { setTheme, themeContext } from '@/app/(contexts)/theme';
import { Button } from '@/components/ui';

export type ThemeButtonProps = Omit<React.ComponentProps<typeof Button>, 'onClick'>;

export const ThemeButton = (props: ThemeButtonProps) => {
  const theme = themeContext.useSelect();

  const onThemeClick = () => {
    const updatedTheme = theme.value === 'dark' ? 'light' : 'dark';
    setTheme(updatedTheme);
    theme.set(updatedTheme);
  };

  return (
    <Button size='icon' variant='ghost' onClick={onThemeClick} {...props}>
      {theme.value === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
