'use client';

import * as React from 'react';

import type { IntlProviderProps } from './(contexts)/intl';

import { IntlProvider } from './(contexts)/intl';
import { themeContext } from './(contexts)/theme';

interface ProviderProps {
  children: React.ReactNode;
  intl: IntlProviderProps;
  theme: Omit<React.ComponentProps<typeof themeContext.Provider>, 'children'>;
}

export const Provider = ({ children, intl, theme }: ProviderProps) => (
  <IntlProvider {...intl}>
    <themeContext.Provider {...theme}>{children}</themeContext.Provider>
  </IntlProvider>
);
