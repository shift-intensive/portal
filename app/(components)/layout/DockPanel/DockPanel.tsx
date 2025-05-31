import { HouseIcon } from 'lucide-react';
import Link from 'next/link';

import { SECTIONS } from '@/app/(constants)';
import { GithubIcon } from '@/components/icons';
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

import { ThemeButton } from '../ThemeButton/ThemeButton';

export const DockPanel = () => (
  <TooltipProvider>
    <Dock direction='middle'>
      <DockIcon>
        <Tooltip>
          <TooltipTrigger>
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
      {SECTIONS.filter(({ disabled }) => !disabled).map(({ href, Icon }) => (
        <DockIcon key={href}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={href}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'size-12 rounded-full'
                )}
                aria-label={href.slice(1)}
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
          <TooltipTrigger>
            <Button asChild size='icon' variant='ghost'>
              <Link
                href='https://github.com/shift-intensive'
                rel='noopener noreferrer'
                target='_blank'
              >
                <GithubIcon aria-label='github' />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>github</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>
      <DockIcon>
        <Tooltip>
          <TooltipTrigger>
            <ThemeButton />
          </TooltipTrigger>
          <TooltipContent>
            <p>theme</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>
    </Dock>
  </TooltipProvider>
);
