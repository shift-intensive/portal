'use client';

import { motion } from 'framer-motion';

import { VelocityScroll } from '@/components/ui';

export const SubFooter = () => (
  <motion.section
    className='relative mt-40 overflow-x-clip'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <VelocityScroll className='text-muted-foreground text-xs' defaultVelocity={1}>
      ШИФТ ИНТЕНСИВ
    </VelocityScroll>

    <motion.img
      alt='pixel decoration'
      animate={{ x: 0, y: 0, opacity: 1 }}
      className='absolute top-1/2 left-8 z-20 w-[100px] -translate-y-[200px] sm:left-16 sm:w-[120px] sm:-translate-y-[250px] md:left-20 md:w-[140px] md:-translate-y-[280px] lg:left-32 lg:w-[160px] lg:-translate-y-[320px] xl:left-40 dark:opacity-60'
      initial={{ x: -50, y: -20, opacity: 0 }}
      src='/second-pixel.png'
      transition={{ duration: 0.8, delay: 0.2 }}
    />

    <motion.img
      alt='pixel decoration'
      animate={{ x: 0, y: 0, opacity: 1 }}
      className='absolute top-1/2 -right-[25%] z-20 w-[600px] -translate-y-[200px] sm:-right-[20%] sm:w-[700px] sm:-translate-y-[120px] md:-right-[15%] md:w-[800px] md:-translate-y-[140px] lg:-right-[10%] lg:w-[900px] lg:-translate-y-[160px] xl:-right-[25%] dark:opacity-50'
      initial={{ x: 60, y: 30, opacity: 0 }}
      src='/third-pixel.png'
      transition={{ duration: 0.8, delay: 0.4 }}
    />
  </motion.section>
);
