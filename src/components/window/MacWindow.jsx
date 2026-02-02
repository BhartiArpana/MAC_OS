import React from 'react'
import { Rnd } from 'react-rnd'
import './macWindow.scss'

const MacWindow = () => {
  return (
    <Rnd>
       <div className="window">
        <div className="window-nav">
            <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="title">arpanabharti - zsh</div>
        </div>
        <div className="main-content">
        <p>hello</p>
        </div>
       </div>
    </Rnd>
  )
}

export default MacWindow