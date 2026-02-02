import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/window/MacWindow'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Navbar />
    <MacWindow />
    <Dock />
   </main>
  )
}

export default App
