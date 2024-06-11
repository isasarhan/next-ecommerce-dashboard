import React from 'react'
import { IoDiamond } from "react-icons/io5";
import './login.css'
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className="container-fluid">
            <section className='loginSection d-flex flex-column align-items-center'>
                <span className='icon'><IoDiamond /></span>
                <h3 className='m-4'>Login to Dashboard</h3>
                <div className="card p-5 shadow border-0">
                    <form action="" className='d-flex flex-column align-items-center justify-content-center '>

                        <div class="mb-3 inputWrapper">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="enter your email" />
                            <span className='icon'><FaEnvelope /></span>
                        </div>

                        <div class="mb-3 inputWrapper">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="email" class="form-control" id="password" placeholder="enter your password" />
                            <span className='icon'><FaLock /></span>
                        </div>
                        
                        <button className='btn btn-primary w-100 text-uppercase mt-3'>Sign In</button>
                        <Link href={'/'} className=' p-4'>FORGOT PASSWORD?</Link>
                        <div className='OrSeperator d-flex align-items-center w-100 justify-content-center'>
                            <span className="line"></span>
                            <span className="or">OR</span>
                            <span className="line"></span>
                        </div>
                        <div className="googleBtn position-relative w-100">
                            <button className='btn btn-outline-primary fw-bold w-100 text-uppercase'>Sign In With Google</button>
                            <img src="/images/google.png" alt="" className='googleIcon'/>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default LoginPage