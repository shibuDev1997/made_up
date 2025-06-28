import { cn } from '@/lib/utils';
import React from 'react'

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        "container mx-auto max-w-screen-sm md:max-w-screen-md  lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1440px] 3xl:max-w-[1496px] px-[12px] sm:px-5 lg:px-5 2xl:px-5 3xl:px-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container