'use client';

import Link from 'next/link';
import { useIntl } from 'react-intl';

import { SECTIONS } from '@/app/(constants)';
import { GithubIcon, TelegramIcon, VkIcon } from '@/components/icons';
import { IntlText } from '@/components/intl';
import { Logo } from '@/components/shared';

const SOCIALS = [
  {
    href: 'https://t.me/focusstart',
    Icon: TelegramIcon,
    alt: 'footer.social.telegram.alt'
  },
  {
    href: 'https://vk.com/project_shift',
    Icon: VkIcon,
    alt: 'footer.social.vk.alt'
  },
  {
    href: 'https://github.com/shift-intensive',
    Icon: GithubIcon,
    alt: 'footer.social.github.alt'
  }
] as const;

export const Footer = () => {
  const intl = useIntl();

  return (
    <footer className='bg-background border-border z-0 my-20 border-t'>
      <div className='container mx-auto px-4 py-16'>
        <div className='flex flex-col justify-between gap-4 md:flex-row'>
          <div className='space-y-4'>
            <Logo alt={intl.formatMessage({ id: 'footer.logo.alt' })} className='w-10' />
            <p className='text-muted-foreground text-sm'>
              <IntlText path='footer.description' />
            </p>
            <div className='flex gap-3'>
              {SOCIALS.map((social) => (
                <Link
                  href={social.href}
                  key={social.href}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <social.Icon
                    aria-label={intl.formatMessage({ id: social.alt })}
                    className='size-5'
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-20'>
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold'>
                <IntlText path='footer.directions.title' />
              </h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='/getting-started'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    <IntlText path='footer.directions.getting-started' />
                  </Link>
                </li>
                {SECTIONS.filter((section) => !section.disabled).map((section) => (
                  <li key={section.href}>
                    <Link
                      href={section.href}
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      <IntlText path={section.title as MessagePath} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='space-y-4'>
              <h3 className='text-sm font-semibold'>
                <IntlText path='footer.ecosystem.title' />
              </h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='https://team.cft.ru/start/school'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    <IntlText path='footer.ecosystem.courses' />
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://team.cft.ru/events/130'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    <IntlText path='footer.ecosystem.lab' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
