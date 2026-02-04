import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} width="60vw" height="70vh">
        <div className="resume-window">
           <iframe
        src="/resume.pdf"
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
        </div>
    </MacWindow>
  )
}

export default Resume