import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/window/MacWindow'
import Github from './components/window/Github'
import Note from './components/window/Note'
import Resume from './components/window/Resume'
import Spotify from './components/window/Spotify'
import Cli from './components/window/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function App() {
  const [windowState, setWindowState] = useState({
    github:false,
    notes:false,
    resume:false,
    spotify:false,
    cli:false
  })

  return (
   <main>
    <Navbar />
    <Dock windowState={windowState} setWindowState={setWindowState}/>
    {windowState.github && <Github windowName='github' windowState={windowState} setWindowState={setWindowState}/>}
    {windowState.notes && <Note windowName='notes' windowState={windowState} setWindowState={setWindowState}/>}
    {windowState.resume && <Resume windowName='resume' windowState={windowState} setWindowState={setWindowState}/>}
    {windowState.spotify && <Spotify windowName='spotify' windowState={windowState} setWindowState={setWindowState}/>}
    {windowState.cli && <Cli windowName='cli' windowState={windowState} setWindowState={setWindowState} />}
   </main>
  )
}

export default App
