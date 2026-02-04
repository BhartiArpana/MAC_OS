import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/window/MacWindow'
import Github from './components/window/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Navbar />
    <Dock />
    <Github />
   </main>
  )
}

export default App
