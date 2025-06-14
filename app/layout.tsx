import { Wix_Madefor_Text } from 'next/font/google';

import { Footer, GoogleTagManagerScript, Header, YandexMetrikaScript } from './(components)';
import { getDictionary } from './(contexts)/intl/helpers/getDictionary';
import { Provider } from './provider';

import './globals.css';

const wixMadeforText = Wix_Madefor_Text({
  variable: '--font-wix-madefor-text',
  subsets: ['latin']
});

const locale = 'ru';

export const generateMetadata = async () => {
  const messages = await getDictionary(locale);

  return {
    title: messages['seo.landing.title'],
    description: messages['seo.landing.description']
  };
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: Readonly<RootLayoutProps>) => {
  const messages = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link href='/metadata/favicon.ico' rel='icon' sizes='any' />
        <meta content='/metadata/open-graph.png' property='og:image' />
        <meta content='image/png' property='og:image:type' />
        <meta content='1200' property='og:image:width' />
        <meta content='640' property='og:image:height' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = document.cookie.match(/theme=(.*?)(;|$)/)?.[1] || 'light';
              document.documentElement.classList.add(theme);
            `
          }}
        />
      </head>
      <body className={`${wixMadeforText.variable} flex min-h-screen flex-col`}>
        {process.env.NODE_ENV === 'production' && (
          <>
            <YandexMetrikaScript />
            <GoogleTagManagerScript />
          </>
        )}

        <Provider intl={{ locale, messages }}>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
