import Link from 'next/link';

import { ThemeButton } from './components';

export const Header = () => (
  <header className='w-full'>
    <div className='container mx-auto flex h-16 items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <img alt='Logo' className='w-10' src='/logo.png' />
      </Link>

      <div className='flex items-center gap-4'>
        <Link
          href='https://github.com/yourusername/yourrepo'
          className='rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800'
          rel='noopener noreferrer'
          target='_blank'
        >
          {/* <FaGithub className='h-6 w-6' /> */}
        </Link>

        <ThemeButton />
      </div>
    </div>
  </header>
);
