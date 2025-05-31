'use client';

import Image from 'next/image';
import Link from 'next/link';

import { SECTIONS } from '@/app/(constants)';
import { GithubIcon, TelegramIcon, VkIcon } from '@/components/icons';

const SOCIALS = [
  {
    href: 'https://t.me/focusstart',
    Icon: TelegramIcon
  },
  {
    href: 'https://vk.com/project_shift',
    Icon: VkIcon
  },
  {
    href: 'https://github.com/shift-intensive',
    Icon: GithubIcon
  }
];

export const Footer = () => (
  <footer className='bg-background border-border z-0 mt-40 mb-20 border-t'>
    <div className='container mx-auto px-4 py-16'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <div className='space-y-4'>
          <Image alt='logo' height={40} src='/images/logo.png' width={120} />
          <p className='text-muted-foreground text-sm'>
            Бесплатный развивающий проект для начинающих айтишников
          </p>
          <div className='flex gap-3'>
            {SOCIALS.map((social) => (
              <Link href={social.href} key={social.href}>
                <social.Icon className='size-5' />
              </Link>
            ))}
          </div>
        </div>

        <div className='space-y-4'>
          <h3 className='text-sm font-semibold'>Направления</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link
                href='/getting-started'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Начать обучение
              </Link>
            </li>
            {SECTIONS.filter((section) => !section.disabled).map((section) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='space-y-4'>
          <h3 className='text-sm font-semibold'>Компания</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link
                href='/about'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                href='/blog'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Курсы
              </Link>
            </li>
            <li>
              <Link
                href='/careers'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Лаборатория
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
