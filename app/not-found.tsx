import { FileQuestionIcon } from 'lucide-react';
import Link from 'next/link';

import { IntlText } from '@/components/intl';
import { Button } from '@/components/ui';

const NotFound = () => (
  <main className='flex flex-1 flex-col items-center justify-center gap-4 text-center'>
    <FileQuestionIcon className='size-32 text-pink-500 dark:text-pink-400' />
    <h1 className='text-4xl font-semibold'>
      <IntlText path='notFound.title' />
    </h1>
    <Button asChild variant='outline'>
      <Link href='/'>
        <IntlText path='notFound.backHome' />
      </Link>
    </Button>
  </main>
);

export default NotFound;
