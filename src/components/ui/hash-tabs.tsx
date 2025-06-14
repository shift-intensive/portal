'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { useUrlSearchParam } from '@siberiacancode/reactuse';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface HashTabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  param?: string;
}

const HashTabs = ({ className, param = 'tab', ...props }: HashTabsProps) => {
  const searchParams = useUrlSearchParam(param, props.defaultValue);

  const onValueChange = (value: string) => searchParams.set(value);

  return (
    <TabsPrimitive.Root
      className={cn('flex flex-col gap-2', className)}
      value={searchParams.value}
      data-slot='tabs'
      onValueChange={onValueChange}
      {...props}
    />
  );
};

export { HashTabs };
