'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, Smartphone, StarIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { IntlText } from '@/components/intl';
import { AnimatedShinyText, Iphone15Pro } from '@/components/ui';

export const MobileAppSection = () => (
  <motion.section
    animate={{ opacity: 1 }}
    className='container mx-auto mt-20 flex max-w-4xl items-center justify-center px-8 lg:mt-40 lg:px-4'
    initial={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <div className='order-1 md:row-span-2'>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          className='flex w-full flex-col items-center justify-center gap-4 md:items-start lg:items-start'
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='bg-card w-fit rounded-full border border-black/5 text-center text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'>
            <AnimatedShinyText className='flex inline-flex items-center justify-center gap-2 px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
              <Smartphone className='size-4' /> <IntlText path='section.mobileapp.badge' />
            </AnimatedShinyText>
          </div>
          <h2 className='text-4xl font-bold'>
            <IntlText path='section.mobileapp.title' />
          </h2>
        </motion.div>

        <motion.p
          animate={{ y: 0, opacity: 1 }}
          className='text-muted-foreground text-md mt-6 mb-8 md:text-xl'
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <IntlText path='section.mobileapp.description' />
        </motion.p>

        <motion.div
          animate={{ y: 0, opacity: 1 }}
          className='mb-8 flex flex-wrap justify-start gap-6 md:flex-col md:justify-center'
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-green-100 p-2'>
              <CalendarIcon className='size-6 text-green-600' />
            </div>
            <div>
              <div className='text-sm font-semibold'>
                <IntlText path='section.mobileapp.feature.schedule' />
              </div>
              <div className='text-muted-foreground text-xs'>
                <IntlText path='section.mobileapp.feature.schedule.desc' />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-blue-100 p-2'>
              <StarIcon className='size-6 text-blue-600' />
            </div>
            <div>
              <div className='text-sm font-semibold'>
                <IntlText path='section.mobileapp.feature.notifications' />
              </div>
              <div className='text-muted-foreground text-xs'>
                <IntlText path='section.mobileapp.feature.notifications.desc' />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-purple-100 p-2'>
              <UsersIcon className='size-6 text-purple-600' />
            </div>
            <div>
              <div className='text-sm font-semibold'>
                <IntlText path='section.mobileapp.feature.polls' />
              </div>
              <div className='text-muted-foreground text-xs'>
                <IntlText path='section.mobileapp.feature.polls.desc' />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        className='order-2 flex justify-center md:col-start-2 md:row-span-3 md:row-start-1'
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Iphone15Pro className='h-[650px] w-[350px]'>
          <Image alt='Mobile app preview' height={384} src='/mobile-app-preview.png' width={184} />
        </Iphone15Pro>
      </motion.div>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        className='order-3 flex justify-center md:col-start-1 md:row-start-3 md:justify-start'
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link href='https://www.rustore.ru/catalog/app/ru.shiftlab.rustore'>
          <img alt='RuStore' className='w-40' src='/images/rustore.png' />
        </Link>
      </motion.div>
    </div>
  </motion.section>
);
