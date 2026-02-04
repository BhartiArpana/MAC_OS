import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/window/MacWindow'
import Github from './components/window/Github'
import Note from './components/window/Note'
import Resume from './components/window/Resume'
import Spotify from './components/window/Spotify'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Navbar />
    <Dock />
    <Github />
    <Note />
    {/* <Resume /> */}
    <Spotify />
   </main>
  )
}

export default App
