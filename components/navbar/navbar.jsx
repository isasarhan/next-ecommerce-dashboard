'use client'
import React, { useContext, useState } from 'react'
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { FaGlobe, FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";

import './navbar.css'
import { MyContext } from '@/app/layout';
const Navbar = () => {
    const [openDropDown, setOpenDropdown] = useState(false)
    const toggleDropDown = () => {
        setOpenDropdown(!openDropDown)
    }
    const context = useContext(MyContext)
    return (
        <header>
            <div className="container-fluid">
                <div className="row d-flex align-items-center h-100">
                    <div className="col-sm-2">
                        <img src="/images/logo.png" alt="" className='logo' />
                    </div>
                    <div className="col-sm-5 d-flex justify-content-start align-items-center">

                        <button className='btn rounded-circle p-2' onClick={() => context.setIsToggleMenu(!context.isToggleMenu)}>
                            <IoMenu /> </button>
                        <div className="searchField position-relative">
                            <input type="text" placeholder='quick search ...' />
                            <span className='icon'><IoSearchSharp /></span>
                        </div>
                    </div>
                    <div className="col-sm-5 d-flex justify-content-end align-items-center">
                        <button className='btn rounded-circle'><IoSunny />
                            <span class="badge bg-danger">21</span>
                        </button>
                        <button className='btn rounded-circle'><FaGlobe />
                            <span class="badge bg-danger">21</span>
                        </button>
                        <button className='btn rounded-circle'><FaEnvelope />
                            <span class="badge bg-danger">21</span>
                        </button>
                        <button className='btn rounded-circle'><FaBell />
                            <span class="badge bg-danger">21</span>
                        </button>
                        <div className="dropdown" onClick={toggleDropDown}>
                            <div className="userInfo d-flex align-items-center cursor dropdown-toggle">
                                <span className=' rounded-circle userImage overflow-hidden' data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="/images/profile.jpeg" alt="" />
                                </span>
                                <div>
                                    <h5 className='text-secondary text-capitalize p-0 m-0'>issa sarhan</h5>
                                    <span className=''>@issa98</span>
                                </div>
                            </div>
                            <ul className={`dropdown-menu mt-2 ${openDropDown ? 'show' : ''}`}>
                                <li><a className="dropdown-item p-2 text-gray" href="#"><FaUser className='me-3 ms-2' />My Account</a></li>
                                <li><a className="dropdown-item p-2 text-gray" href="#"><FaShieldAlt className='me-3 ms-2' />Reset Password</a></li>
                                <li><a className="dropdown-item p-2 text-gray" href="#"><FiLogOut className='me-3 ms-2' />Logout</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar