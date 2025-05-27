'use client';

import * as React from 'react';

import { themeContext } from './(contexts)/theme';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => (
  <themeContext.Provider>{children}</themeContext.Provider>
);
