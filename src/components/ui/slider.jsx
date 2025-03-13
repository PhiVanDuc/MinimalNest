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
      <SliderPrimitive.Range className="bg-darkMedium absolute h-full" />
    </SliderPrimitive.Track>
    {props.defaultValue && Array.isArray(props.defaultValue) ? (
      props.defaultValue.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className={cn(
            'border-[2px] border-darkBold bg-background block h-5 w-5 rounded-full',
            index === 0 ? 'left-0' : 'right-0'
          )}
        />
      ))
    ) : (
      <SliderPrimitive.Thumb className="border-[2px] border-darkBold bg-background block h-5 w-5 rounded-full" />
    )}
    <SliderPrimitive.Thumb className="border-[2px] border-darkBold bg-background block h-5 w-5 rounded-full" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
