import Link from 'next/link';

import { GithubIcon } from '@/components/icons';
import { Button } from '@/components/ui';

import { ThemeButton } from './components';

export const Header = () => (
  <header className='w-full'>
    <div className='container mx-auto flex h-16 items-center justify-between px-4'>
      <Link href='/' className='flex items-center'>
        <img alt='Logo' className='w-10' src='/images/logo.png' />
      </Link>

      <div className='flex items-center gap-1'>
        <Button asChild size='icon' variant='ghost'>
          <Link href='https://github.com/shift-intensive' rel='noopener noreferrer' target='_blank'>
            <GithubIcon />
          </Link>
        </Button>

        <ThemeButton />
      </div>
    </div>
  </header>
);
