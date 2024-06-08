import React from 'react'
import './dashboardbox.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdOutlineTrendingUp, MdOutlineTrendingDown } from "react-icons/md";
import { IconButton } from '@mui/material';
const DashboardBox = ({ title, nb, icon, badgeNb, badgeTitle, color, grow }) => {
    return (
        <div className="dashboardBox position-relative text-white"
            style={{ backgroundImage: `linear-gradient(to right, ${color[0]}, ${color[1]})` }}>

            <span className='growth' style={{ color: color[0] }}>
                {grow ? <MdOutlineTrendingUp /> : <MdOutlineTrendingDown />}
            </span>
            <div className="d-flex justify-content-between flex-column">
                <div className='pb-5'>
                    <h4 className="title ">{title}</h4>
                    <span className="nb">{nb}</span>
                    <div className="icon" style={{ background: color[0] }}>{icon}</div>
                </div>
                <div className="badgeSection d-flex align-items-center justify-content-between">
                    <div className="badgeWrapper" >
                        <div className="badge me-2" style={{ background: color[1] }}>{badgeNb}</div>
                        <span className='badge-title'>{badgeTitle}</span>
                    </div>
                    <div>
                        <IconButton><BsThreeDotsVertical /></IconButton>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DashboardBox