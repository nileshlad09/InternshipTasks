import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="navbar-logo">
                <span>
                 ByteMedScheduler
                </span> 
            </div>
            <div className="loginDiv">
                <button className='btn'>
                    login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
