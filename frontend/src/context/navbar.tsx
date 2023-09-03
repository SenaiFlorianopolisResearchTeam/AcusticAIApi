"use client"

import { createContext, useContext, ReactNode, useState } from 'react';

type NavbarContextType = {
  page: string;
  setPage: (page: string) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<string>('');

  return (
    <NavbarContext.Provider value={{ page, setPage }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function usePage() {
  const context = useContext(NavbarContext);

  if (context === undefined) {
    throw new Error('usePage needs a PageProvider');
  }

  return context;
}
