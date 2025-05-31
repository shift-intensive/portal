'use client';

import Link from 'next/link';
import { useIntl } from 'react-intl';

import { GithubIcon } from '@/components/icons';
import { Button } from '@/components/ui';

import { ThemeButton } from '../ThemeButton/ThemeButton';

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
