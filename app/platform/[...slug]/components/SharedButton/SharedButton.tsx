'use client';

import { useCopy, useMediaQuery, useShare } from '@siberiacancode/reactuse';
import { CheckIcon, CopyIcon, ShareIcon } from 'lucide-react';

import { IntlText } from '@/components/intl';
import { Button, Input, Popover, PopoverContent, PopoverTrigger, Skeleton } from '@/components/ui';

interface SharedButtonProps {
  emoji: string;
  title: string;
}

export const SharedButton = ({ emoji, title }: SharedButtonProps) => {
  const { copy, copied } = useCopy(1000);
  const share = useShare();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const onCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    copy(window.location.href);
  };

  const onShare = () => {
    if (isMobile) {
      return share.trigger({
        title,
        text: `${emoji} ${title}`,
        url: window.location.href
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size='icon' variant='ghost' onClick={onShare}>
          <ShareIcon className='size-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='flex w-[500px] flex-col gap-1'>
        <div className='relative flex flex-col rounded-lg border border-b-0'>
          <div className='bg-card flex items-center gap-4 rounded-lg px-3'>
            <div className='flex items-center gap-1.5'>
              <div className='size-3 rounded-full bg-red-400' />
              <div className='size-3 rounded-full bg-yellow-400' />
              <div className='size-3 rounded-full bg-green-400' />
            </div>
            <div className='flex flex-1 items-center gap-2 rounded-md px-3 py-1'>
              <div className='text-gray-400'>{emoji}</div>
              <div className='text-sm text-ellipsis whitespace-nowrap'>{title}</div>
            </div>
          </div>

          <div className='flex flex-col gap-4 p-4'>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-start text-4xl'>{emoji}</div>
              <span className='text-lg font-medium'>{title}</span>
            </div>

            <div className='space-y-2'>
              <Skeleton className='h-6 w-3/4 animate-none' />
              <Skeleton className='h-6 w-1/2 animate-none' />
            </div>
          </div>

          <div className='absolute right-0 bottom-0 left-0 h-10 rounded-b-lg bg-gradient-to-b from-transparent to-black/10' />
        </div>

        <div className='flex items-center gap-2 pt-4'>
          <Input readOnly value={window?.location?.href} />
          <Button disabled={copied} onClick={onCopy}>
            {copied ? <CheckIcon className='mr-2 size-4' /> : <CopyIcon className='mr-2 size-4' />}
            <IntlText path='button.copy' />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
