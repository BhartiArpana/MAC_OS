import React from 'react'
import './navabar.scss'
import DateTime from './DateTime'

const Navbar = () => {
  return (
    <nav>
        <div className="left-nav">
            <img src="/navbar-icons/apple.svg" alt="" />
            <p>Arpana </p>
            <p>File</p>
            <p>Window</p>
            <p>Terminal</p>
        </div>
        <div className="right-nav">
            <img src="/navbar-icons/wifi.svg" alt="" />
            <DateTime />
        </div>
    </nav>
  )
}

export default Navbar