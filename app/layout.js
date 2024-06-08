'use client'
import Navbar from "@/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { createContext, useEffect, useState } from "react";

const MyContext = createContext()

export default function RootLayout({ children }) {
  const [isToggleMenu, setIsToggleMenu] = useState(false)
  const values = {
    isToggleMenu, setIsToggleMenu
  }
  useEffect(()=>{
    console.log(isToggleMenu);
  }, [isToggleMenu])
  return (
    <html>
      <MyContext.Provider value={values}>
        <body >
          <Navbar />
          <div className="main d-flex " >
            <div className={`sidebarWrapper p-0 m-0 ${isToggleMenu ? 'toggle' : ''}`}>
              <Sidebar />
            </div>
            <div className="content bg-main">
              {children}
            </div>
          </div>
        </body>
      </MyContext.Provider>
    </html>
  );
}

export { MyContext }