'use client';

import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="bg-neutral-200 relative h-[7px] w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range className="bg-yellowBold absolute h-full" />
    </SliderPrimitive.Track>
    {props.defaultValue && Array.isArray(props.defaultValue) ? (
      props.defaultValue.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className={cn(
            'border border-yellowBold bg-background ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            index === 0 ? 'left-0' : 'right-0'
          )}
        />
      ))
    ) : (
      <SliderPrimitive.Thumb className="border border-yellowBold bg-background ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    )}
    <SliderPrimitive.Thumb className="border border-yellowBold bg-background ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
