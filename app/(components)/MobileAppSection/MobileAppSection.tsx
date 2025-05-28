'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, Smartphone, StarIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { AnimatedShinyText, Iphone15Pro } from '@/components/ui';

export const MobileAppSection = () => (
  <motion.section
    animate={{ opacity: 1 }}
    className='container mx-auto mt-20 flex items-center justify-center'
    initial={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className='flex max-w-4xl items-center justify-between gap-10'>
      <div className='flex flex-col items-start gap-2'>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          className='mb-6'
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='bg-card w-fit rounded-full border border-black/5 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'>
            <AnimatedShinyText className='flex inline-flex items-center justify-center gap-2 px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
              <Smartphone className='size-4' /> мобильное приложение
            </AnimatedShinyText>
          </div>
          <h2 className='mt-4 text-3xl font-bold lg:text-4xl'>
            Изучай IT прямо
            <br />с телефона
          </h2>
        </motion.div>

        <motion.p
          animate={{ y: 0, opacity: 1 }}
          className='text-muted-foreground mb-8 text-lg lg:text-xl'
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Приложение поможет сделать участие в интенсивах более удобным и информативным. Теперь все
          важные сведения находятся в одном месте, а участники могут всегда быть в курсе всех
          изменений и новостей
        </motion.p>

        <motion.div
          animate={{ y: 0, opacity: 1 }}
          className='mb-8 flex flex-col gap-4 sm:flex-row sm:gap-6'
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-green-100 p-2'>
              <CalendarIcon className='size-6 text-green-600' />
            </div>
            <div>
              <div className='text-sm font-semibold'>Расписание</div>
              <div className='text-muted-foreground text-xs'>всегда под рукой</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-blue-100 p-2'>
              <StarIcon className='size-6 text-blue-600' />
            </div>
            <div>
              <div className='text-sm font-semibold'>Нотификации</div>
              <div className='text-muted-foreground text-xs'>не пропустите важное</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-purple-100 p-2'>
              <UsersIcon className='size-6 text-purple-600' />
            </div>
            <div>
              <div className='text-sm font-semibold'>Опросы</div>
              <div className='text-muted-foreground text-xs'>поделитесь мнением</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: 0, opacity: 1 }}
          className='flex flex-col gap-4 sm:flex-row'
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href='https://www.rustore.ru/catalog/app/ru.shiftlab.rustore'>
            <img alt='RuStore' className='w-40' src='/rustore.png' />
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ x: 0, opacity: 1 }}
        className='flex flex-1 justify-center lg:justify-end'
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Iphone15Pro className='h-[584px] w-[284px]'>
          <Image alt='Mobile app preview' height={384} src='/mobile-app-preview.png' width={184} />
        </Iphone15Pro>
      </motion.div>
    </div>
  </motion.section>
);
