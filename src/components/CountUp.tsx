"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ target, suffix = '', duration = 2000, className = '' }: CountUpProps) {
  const [shouldStart, setShouldStart] = useState(false);
  const count = useCountUp({ target, duration, shouldStart });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onViewportEnter={() => setShouldStart(true)}
      className={className}
    >
      <span>
        {count}{suffix}
      </span>
    </motion.div>
  );
} 