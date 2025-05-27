'use client';

import type { VariantProps } from 'class-variance-authority';
import type { MotionProps, MotionValue } from 'motion/react';
import type { PropsWithChildren } from 'react';

import { cva } from 'class-variance-authority';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react';

import { cn } from '@/lib/utils';

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md'
);

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: React.ReactNode;
  className?: string;
  distance?: number;
  magnification?: number;
  mouseX?: MotionValue<number>;
  props?: PropsWithChildren;
  size?: number;
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full',
        className
      )}
      style={{ width: scaleSize, height: scaleSize, padding }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = 'DockIcon';

export interface DockProps extends VariantProps<typeof dockVariants> {
  children: React.ReactNode;
  className?: string;
  direction?: 'bottom' | 'middle' | 'top';
  iconDistance?: number;
  iconMagnification?: number;
  iconSize?: number;
}

const Dock = ({
  ref,
  className,
  children,
  iconSize = DEFAULT_SIZE,
  iconMagnification = DEFAULT_MAGNIFICATION,
  iconDistance = DEFAULT_DISTANCE,
  direction = 'middle',
  ...props
}: DockProps & { ref?: React.RefObject<HTMLDivElement | null> }) => {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement<DockIconProps>(child) && child.type === DockIcon) {
        return React.cloneElement(child, {
          ...child.props,
          mouseX,
          size: iconSize,
          magnification: iconMagnification,
          distance: iconDistance
        });
      }
      return child;
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseLeave={() => mouseX.set(Infinity)}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      {...props}
      className={cn(dockVariants({ className }), {
        'items-start': direction === 'top',
        'items-center': direction === 'middle',
        'items-end': direction === 'bottom'
      })}
    >
      {renderChildren()}
    </motion.div>
  );
};

Dock.displayName = 'Dock';

export { Dock, DockIcon, dockVariants };
