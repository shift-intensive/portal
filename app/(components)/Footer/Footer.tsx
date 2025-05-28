'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => (
  <motion.footer
    className='bg-background border-border mt-40 border-t'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className='container mx-auto px-4 py-16'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {/* Logo and description */}
        <div className='space-y-4'>
          <Image alt='logo' height={40} src='/logo.png' width={120} />
          <p className='text-muted-foreground text-sm'>
            Бесплатный развивающий проект для начинающих айтишников
          </p>
        </div>

        {/* Navigation */}
        <div className='space-y-4'>
          <h3 className='text-sm font-semibold'>Направления</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link
                href='/web'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Веб
              </Link>
            </li>
            <li>
              <Link
                href='/android'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Android
              </Link>
            </li>
            <li>
              <Link
                href='/test'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Тестирование
              </Link>
            </li>
            <li>
              <Link
                href='/backend'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Backend
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
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
                Блог
              </Link>
            </li>
            <li>
              <Link
                href='/careers'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Карьера
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className='space-y-4'>
          <h3 className='text-sm font-semibold'>Ресурсы</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link
                href='/help'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Помощь
              </Link>
            </li>
            <li>
              <Link
                href='/privacy'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Конфиденциальность
              </Link>
            </li>
            <li>
              <Link
                href='/terms'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Условия
              </Link>
            </li>
            <li>
              <Link
                href='/support'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Поддержка
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className='border-border mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row'>
        <p className='text-muted-foreground text-sm'>© 2024 Шифт Интенсив. Все права защищены.</p>
        <div className='mt-4 flex space-x-6 md:mt-0'>
          <Link
            href='https://telegram.org'
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            <span className='sr-only'>Telegram</span>
            <svg className='size-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.548c-.12.57-.44.712-.895.445l-2.463-1.815-1.187 1.14c-.131.132-.242.242-.497.242l.178-2.52L15.678 9.4c.179-.16-.04-.249-.278-.089L11.8 11.67l-2.42-.757c-.526-.164-.535-.526.11-.778l9.46-3.64c.439-.163.824.106.618.765z' />
            </svg>
          </Link>
          <Link
            href='https://github.com'
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            <span className='sr-only'>GitHub</span>
            <svg className='size-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
          </Link>
          <Link
            href='https://vk.com'
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            <span className='sr-only'>VK</span>
            <svg className='size-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zM18.18 13.848l-1.452-.012c-.612 0-.792-.492-1.896-1.596-.96-.888-1.368-.996-1.608-.996-.324 0-.42.096-.42.564v1.452c0 .384-.12.612-1.14.612-1.668 0-3.528-1.008-4.836-2.892C5.22 8.508 4.608 6.228 4.608 5.712c0-.24.096-.468.564-.468h1.452c.42 0 .576.192.744.636.828 2.196 2.208 4.128 2.784 4.128.216 0 .312-.096.312-.636V7.956c-.072-1.176-.696-1.284-.696-1.704 0-.192.156-.384.408-.384h2.292c.348 0 .48.192.48.624v3.348c0 .348.156.48.252.48.216 0 .396-.132.792-.528 1.212-1.356 2.076-3.456 2.076-3.456.12-.252.312-.468.732-.468h1.452c.516 0 .636.264.516.624-.18.6-.828 1.476-1.404 2.208-.468.588-.66.9 0 1.548.6.588 1.284 1.14 1.668 1.848.252.468.132.708-.372.708z' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </motion.footer>
);
