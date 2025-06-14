'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface HashTabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  param?: string;
}

const HashTabs = ({ className, param = 'tab', ...props }: HashTabsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get(param) ?? props.defaultValue;

  const onValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <TabsPrimitive.Root
      className={cn('flex flex-col gap-2', className)}
      value={currentTab}
      data-slot='tabs'
      onValueChange={onValueChange}
      {...props}
    />
  );
};

export { HashTabs };
