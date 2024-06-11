'use client'
import React, { createContext, useState } from 'react'

export const SidebarContext = createContext('')

export const  SidebarProvider = ({children}) => {
    const [isToggleMenu, setIsToggleMenu] = useState(false)
    const values = {
        isToggleMenu, setIsToggleMenu
    }
    return (
        <SidebarContext.Provider value={values}>
            {children}
        </SidebarContext.Provider>
    )
}
