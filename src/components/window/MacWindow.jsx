import React from 'react'
import { Rnd } from 'react-rnd'
import './macWindow.scss'


const MacWindow = ({children,width="50vw",height="30vw",windowName,setWindowState}) => {
  return (
    <Rnd
    default={{
      width: width,
    height: height,
    x:300,
    y:100

    }}
    >
       <div className="window">
        <div className="window-nav">
            <div className="dots">
                <div onClick={()=>setWindowState(state=>({...state,[windowName]:false}))} className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="title">arpanabharti - zsh</div>
        </div>
        <div className="main-content">
        {children}
        </div>
       </div>
    </Rnd>
  )
}

export default MacWindow