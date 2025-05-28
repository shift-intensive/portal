'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { AppleIcon, FrenchFries, PizzaIcon, RobotIcon, TestTubeIcon } from '@/components/icons';
import { AnimatedShinyText, Pointer } from '@/components/ui';

const SECTIONS = [
  {
    href: '/web',
    title: 'Веб',
    description: 'Создание современных веб-сайтов',
    Icon: PizzaIcon,
    disabled: false
  },
  {
    href: '/ios',
    title: 'iOS',
    description: 'IOS разработка это недорого',
    Icon: AppleIcon,
    disabled: true
  },
  {
    href: '/android',
    title: 'Android',
    description: 'Anroid приложения для всех',
    Icon: RobotIcon,
    disabled: false
  },
  {
    href: '/test',
    title: 'Тестирование',
    description: 'Тестирование со всех сторон',
    Icon: TestTubeIcon,
    disabled: false
  },
  {
    href: '/analytics',
    title: 'Аналитика',
    description: 'Аналитика данных и бизнес-процессов',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/ml',
    title: 'Machine Learning',
    description: 'Машинное обучение',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/backend',
    title: 'Backend',
    description: 'Серверная разработка',
    Icon: FrenchFries,
    disabled: false
  },
  {
    href: '/system-analysis',
    title: 'Системный анализ',
    description: 'Анализ и проектирование систем',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/autotests',
    title: 'Автотесты',
    description: 'Автоматизированное тестирование',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/information-security',
    title: 'Информационная безопасность',
    description: 'Защита информационных систем',
    Icon: TestTubeIcon,
    disabled: true
  }
];

export const BannerSection = () => (
  <section className='relative overflow-x-clip'>
    <div className='container mx-auto flex h-full flex-col items-center justify-center px-4'>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className='z-10 text-center'
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div className='flex items-center justify-center'>
          <div className='group bg-card rounded-full border border-black/5 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'>
            <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
              <span>✨ начни свою карьеру</span>
              <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
            </AnimatedShinyText>
          </div>
        </div>

        <div className='mt-8 flex items-center justify-center'>
          <Image alt='logo' height={201} src='/logo.png' width={596} />
        </div>
        <p className='mt-12 mb-8 text-xl opacity-80'>
          Бесплатный развивающий проект, цель которого – помочь
          <br />
          начинающим айтишникам прокачаться в выбранном направлении, стать
          <br />
          востребованными специалистами и получить работу
        </p>

        <div className='mt-12 flex max-w-4xl flex-wrap justify-center gap-2'>
          {SECTIONS.sort((a, b) => Number(a.disabled) - Number(b.disabled)).map(
            ({ title, Icon, href, disabled }) => (
              <div key={title}>
                {disabled && (
                  <div className='opacity-50'>
                    <div className='bg-card flex flex-col gap-2 rounded-lg border border-black/9 px-12 py-3'>
                      <div className='text-xl'>{title}</div>
                    </div>
                  </div>
                )}
                {!disabled && (
                  <Link href={href}>
                    <motion.div whileHover={{ scale: 1.04 }}>
                      <div className='bg-card flex flex-col gap-2 rounded-lg border border-black/9 px-12 py-3'>
                        <div className='text-xl'>{title}</div>
                      </div>
                    </motion.div>
                    <Pointer className='z-10'>
                      <Icon className='size-8' />
                    </Pointer>
                  </Link>
                )}
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>

    <motion.img
      alt='pixel'
      animate={{ x: 0, y: 0, opacity: 1 }}
      className='absolute top-1/2 right-8 w-[120px] -translate-y-[300px] sm:right-16 sm:w-[140px] sm:-translate-y-[350px] md:right-20 md:w-[157px] md:-translate-y-[400px] lg:right-32 lg:w-[180px] lg:-translate-y-[450px] xl:right-40 dark:opacity-80'
      initial={{ x: 70, y: -30, opacity: 0 }}
      src='/second-pixel.png'
      transition={{ duration: 0.5 }}
    />
    <motion.img
      alt='pixel'
      animate={{ x: 0, y: 0, opacity: 1 }}
      className='absolute top-1/2 -left-[45%] w-[700px] -translate-y-[150px] sm:-left-[40%] sm:w-[800px] sm:-translate-y-[175px] md:-left-[30%] md:w-[941px] md:-translate-y-[200px] lg:-left-[25%] lg:w-[1100px] lg:-translate-y-[250px] xl:-left-[20%] dark:opacity-80!'
      initial={{ x: -70, y: 20, opacity: 0 }}
      src='/first-pixel.png'
      transition={{ duration: 0.5 }}
    />
    <motion.img
      alt='pixel'
      animate={{ x: 0, y: 0, opacity: 1 }}
      className='absolute top-1/2 -right-[35%] w-[800px] translate-y-[180px] sm:-right-[30%] sm:w-[900px] sm:translate-y-[200px] md:-right-[20%] md:w-[1041px] md:translate-y-[220px] lg:-right-[15%] lg:w-[1200px] lg:translate-y-[260px] xl:-right-[20%] dark:opacity-80'
      initial={{ x: 70, y: 60, opacity: 0 }}
      src='/first-pixel.png'
      transition={{ duration: 0.5 }}
    />
  </section>
);
