'use client';

import { ThemeContext, ThemeProvider } from './ThemeContext';
import { SidebarContext, SidebarProvider } from './SidebarContext';
import { useContext, useEffect } from 'react';

export function Providers({ children }) {
    const { theme } = useContext(ThemeContext);
    const { isToggleMenu } = useContext(SidebarContext);


    return (
        <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
    );
}