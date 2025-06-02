'use client';

import type { ComponentProps } from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';

import { useTheme } from '@/app/(contexts)/theme';
import { Button } from '@/components/ui';

type ThemeButtonProps = ComponentProps<typeof Button>;

export const ThemeButton = (props: ThemeButtonProps) => {
  const theme = useTheme();

  const onThemeClick = () => theme.set(theme.value === 'dark' ? 'light' : 'dark');

  return (
    <Button size='icon' variant='ghost' onClick={onThemeClick} {...props}>
      {theme.value === 'dark' ? <SunIcon className='size-4' /> : <MoonIcon className='size-4' />}
    </Button>
  );
};
