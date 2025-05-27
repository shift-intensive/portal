'use client';

import { HouseIcon } from 'lucide-react';
import Link from 'next/link';

import { AppleIcon, TestTubeIcon } from '@/components/icons';
import {
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

export const DockPanel = () => (
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
          <TooltipTrigger>123</TooltipTrigger>
          <TooltipContent>
            <p>Theme</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>
    </Dock>
  </TooltipProvider>
);
