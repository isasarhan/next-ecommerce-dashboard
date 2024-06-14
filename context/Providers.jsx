'use client';

import { ThemeProvider } from './ThemeContext';
import { SidebarProvider } from './SidebarContext';

export function Providers({ children }) {
 
    return (
        <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
    );
}