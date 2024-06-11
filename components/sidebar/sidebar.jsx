'use client'
import React, { useContext, useState } from 'react'
import './sidebar.css'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaLock, FaUser } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { Button } from '@mui/material';
import Link from 'next/link';
import { SidebarContext } from '@/context/SidebarContext';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [isToggleMenu, setisToggleMenu] = useState(false)

    const context = useContext(SidebarContext)
    const toggleMenu = (menu) => {
        setActiveTab(menu)
        if (menu === activeTab)
            setisToggleMenu(!isToggleMenu)
    }
    return (
        <div className={`sidebarWrapper p-0 m-0 ${context.isToggleMenu ? 'toggle' : ''}`}>
            <div className='sidebar'>
                <ul className='p-3 '>
                    <li>
                        <Link href={'/'}>
                            <Button className={`w-100 text-start ${activeTab === 1 ? 'active' : ''}`} onClick={() => toggleMenu(1)}>
                                <span className='icon me-3'><BsFillGrid1X2Fill /></span> Dashboard<span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/auth/login'}>
                            <Button className={`w-100 text-start ${activeTab === 2 ? 'active' : ''}`} onClick={() => toggleMenu(2)}>
                                <span className='icon me-3'><FaLock /></span> Authentication<span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/users'}>
                            <Button className={`w-100 text-start ${activeTab === 3 ? 'active' : ''}`} onClick={() => toggleMenu(3)}>
                                <span className='icon me-3'><FaUser /></span> Users<span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 text-start ${activeTab === 4 && isToggleMenu ? 'active' : ''}`} onClick={() => toggleMenu(4)}>
                            <span className='icon me-3'><AiFillProduct size={26} /></span> Products<span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 4 && isToggleMenu ? 'expand' : 'collapse'}`}>
                            <ul className='submenu'>
                                <li><Link href={'/products'}>Product List</Link></li>
                                <li><Link href={'/products/add'}>Upload Product</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 text-start ${activeTab === 5 && isToggleMenu ? 'active' : ''}`} onClick={() => toggleMenu(5)}>
                            <span className='icon me-3'><FaFileInvoice /></span> Blog<span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 5 && isToggleMenu ? 'expand' : 'collapse'}`}>
                            <ul className='submenu'>
                                <li><Link href={'#'}>Blog List</Link></li>
                                <li><Link href={'#'}>Upload Blog</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href={'/'}>

                            <Button className='w-100 text-start'>
                                <span className='icon me-3'><FaShoppingCart /></span> Orders<span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <Button className='w-100 text-start'>
                                <span className='icon me-3'><FaEnvelope /></span> Messages<span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <Button className='w-100 text-start'>
                                <span className='icon me-3'><FaBell /></span> Notifications<span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <Button className='w-100 text-start'>
                                <span className='icon me-3'><FaGear /></span> Settings<span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                </ul><br />
                <div className="logout d-flex justify-content-center">
                    <div className="logoutWrapper p-3 mb-3">
                        <button className='btn btn-primary btn-common'>LOGOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar