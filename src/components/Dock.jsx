import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Dock = ({windowState, setWindowState}) => {
  return (
    <footer className='dock-icons'>
        <div
        onClick={()=>setWindowState(state=>({...state,github:true}))} 
        className="icons github"><img src="/doc-icons/github.svg" alt="" /></div>
        <div 
        onClick={()=>setWindowState(state=>({...state,notes:true}))} className="icons note"><img src="/doc-icons/note.svg" alt="" /></div>
        <div 
        onClick={()=>setWindowState(state=>({...state,resume:true}))} 
        className="icons pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
        <div 
        onClick={()=>window.open('https://calendar.google.com/calendar/u/0/r?pli=1') (__blank)}
        className="icons calender"><img src="/doc-icons/calender.svg" alt="" /></div>
        <div 
        onClick={()=>setWindowState(state=>({...state,spotify:true}))} className="icons spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
        <div 
         onClick={()=>window.open('mailTo:arpana@example.com')}
        className="icons mail"><img src="/doc-icons/mail.svg" alt="" /></div>
        <div 
        onClick={()=>window.open('https://www.linkedin.com/in/arpana-bharti-921086289/')}
        className="icons link"><img src="/doc-icons/link.svg" alt="" /></div>
        <div 
        onClick={()=>setWindowState(state=>({...state,cli:true}))} 
        className="icons cli"><img src="/doc-icons/cli.svg" alt="" /></div>
    </footer>
  )
}

export default Dock