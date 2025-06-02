'use client';

import { Loader2Icon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { GithubIcon } from '@/components/icons';
import { Button } from '@/components/ui';

const ThemeButton = dynamic(
  () => import('./components/ThemeButton/ThemeButton').then((module) => module.ThemeButton),
  {
    ssr: false,
    loading: () => (
      <Button size='icon' variant='ghost'>
        <Loader2Icon className='size-4 animate-spin' />
      </Button>
    )
  }
);

export const Header = () => {
  const intl = useIntl();

  return (
    <header className='w-full'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='flex items-center'>
          <img
            alt={intl.formatMessage({ id: 'header.logo.alt' })}
            className='w-10'
            src='/images/logo.png'
          />
        </Link>

        <div className='flex items-center gap-1'>
          <Button asChild size='icon' variant='ghost'>
            <Link
              href='https://github.com/shift-intensive'
              rel='noopener noreferrer'
              target='_blank'
            >
              <GithubIcon aria-label={intl.formatMessage({ id: 'header.github.alt' })} />
            </Link>
          </Button>

          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
