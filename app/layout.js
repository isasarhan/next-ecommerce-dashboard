'use client'
import Navbar from "@/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";
import { Providers } from "@/context/Providers";


export default function RootLayout({ children }) {

 
  return (
    <html>
      <Providers>

          <body >
            <Navbar />
            <div className="main d-flex " >
              
                <Sidebar />
              
              <div className="content bg-main">
                {children}
              </div>
            </div>
          </body>
      </Providers>
       
    </html>
  );
}

