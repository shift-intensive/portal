'use client';

import { HouseIcon, MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';

import { setTheme, themeContext } from '@/app/(contexts)';
import { AppleIcon, TestTubeIcon } from '@/components/icons';
import {
  Button,
  buttonVariants,
  Dock,
  DockIcon,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui';
import { cn } from '@/lib/utils';

const SECTIONS = [
  {
    href: 'web',
    Icon: TestTubeIcon
  },
  {
    href: 'ios',
    Icon: AppleIcon
  },
  {
    href: 'android',
    Icon: TestTubeIcon
  },
  {
    href: 'test',
    Icon: TestTubeIcon
  }
];

export const DockPanel = () => {
  const theme = themeContext.useSelect();

  const onThemeClick = () => {
    const updatedTheme = theme.value === 'dark' ? 'light' : 'dark';
    setTheme(updatedTheme);
    theme.set(updatedTheme);
  };
  return (
    <TooltipProvider>
      <Dock direction='middle'>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/'
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'size-12 rounded-full'
                )}
                aria-label='main'
              >
                <HouseIcon className='size-4' />
              </Link>
            </TooltipTrigger>
            <TooltipContent>main</TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator className='h-full' orientation='vertical' />
        {SECTIONS.map(({ href, Icon }) => (
          <DockIcon key={href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12 rounded-full'
                  )}
                  aria-label={href}
                >
                  <Icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{href}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator className='h-full py-2' orientation='vertical' />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size='icon' variant='ghost' onClick={onThemeClick}>
                {theme.value === 'dark' ? <SunIcon /> : <MoonIcon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
};
