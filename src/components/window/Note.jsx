import React,{useEffect,useState} from 'react'
import MacWindow from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Markdown from 'react-markdown' 
import './notes.scss'

const Note = ({windowName, setWindowState}) => {
  const [markdown, setmarkdown] = useState('')
  useEffect(()=>{
    fetch('/note.txt')
    .then((res)=>res.text())
    .then((text)=>{
      // console.log(text);
      setmarkdown(text)
    })
  })
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} width="50vw" height="60vh">
      <div className="note-window">
        {markdown?<SyntaxHighlighter style={docco} language='typescript'>{markdown}</SyntaxHighlighter  >:<p>Loading...</p>}
      </div>
        
    </MacWindow>
  )
}

export default Note