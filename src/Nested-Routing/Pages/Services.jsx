import React from 'react'
import './services.css'
import { Link, Outlet } from 'react-router-dom'

const Services = () => {
    return (
        <div className='services-container'>
            <h2 className='services-title'>Our Services</h2>
            <p className='services-subtitle'>Choose one of our Services Below</p>
            <div className='services-links'>
            {/* web-dev */}
                <Link to='web-dev' className='service-link web'>
                Web Devolopement
                </Link>
                {/* App Dev  */}
                <Link to='app-dev' className='service-link app'>
                App Devolopement
                </Link>
            </div>
            {/* Nested route content  */}
            <Outlet/> 
        </div>
    )
}

export default Services
