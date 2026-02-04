import React from 'react'
import './cli.scss'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'

const Cli = ({windowName, setWindowState}) => {

    const commands = {
  commands: {
    description: 'List all available commands',
    fn: () => `
Available commands:

about      → About me
skills     → My technical skills
projects   → Featured projects
contact    → Contact information
clear      → Clear the terminal
`
  },

    about: {
      description: 'About me',
      fn: () => `
Hi, I'm Arpana 👋
Frontend-focused Full Stack Developer
I love building clean UI & React apps.
`
    },

    skills: {
      description: 'My skills',
      fn: () => `
Frontend: React, HTML, CSS, JavaScript
Backend: Node.js, Express
Tools: Git, GitHub, Figma
`
    },

    projects: {
      description: 'My projects',
      fn: () => `
1. Resume Builder
2. Portfolio Website
3. React Dashboard
`
    },

    resume: {
      description: 'Open resume',
      fn: () => {
        window.open('/resume.pdf', '_blank')
        return 'Opening resume...'
      }
    },

    contact: {
      description: 'Contact details',
      fn: () => `
Email: arpana.dev@example.com
Location: India 🇮🇳
`
    }
  
}

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} width="60vw" height="70vh">
        <div className="cli-window">
             <Terminal
         commands={commands}
          welcomeMessage={
`Welcome Arpana 👋
Type 'help' to see available commands.`}
        promptLabel={'arpanabharti:~$'}
      />
        </div>
    </MacWindow> 
  )
}

export default Cli