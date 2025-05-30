'use client';

import * as React from 'react';

import type { IntlProviderProps } from './(contexts)/intl';

import { IntlProvider } from './(contexts)/intl';
import { themeContext } from './(contexts)/theme';

interface ProviderProps {
  children: React.ReactNode;
  intl: IntlProviderProps;
}

export const Provider = ({ children, intl }: ProviderProps) => (
  <IntlProvider {...intl}>
    <themeContext.Provider>{children}</themeContext.Provider>
  </IntlProvider>
);
