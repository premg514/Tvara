'use client';

import { motion } from 'motion/react';

type BlurTextProps = {
  text: string;
  className?: string;
  blur?: string;
  hoverBlur?: string;
  duration?: number;
};

export default function BlurText({
  text,
  className = '',
  blur = '10px',
  hoverBlur = '0px',
  duration = 0.5,
}: BlurTextProps) {
  return (
    <motion.h1
      initial={{
        filter: `blur(${blur})`,
        opacity: 0.6,
      }}
      whileHover={{
        filter: `blur(${hoverBlur})`,
        opacity: 1,
      }}
      transition={{
        duration,
        ease: 'easeOut',
      }}
      className={`
        cursor-pointer
        will-change-[filter,opacity]
        ${className}
      `}
    >
      {text}
    </motion.h1>
  );
}