import React from 'react'
import MacWindow from './MacWindow'
import './github.scss'
import githubData from '../../assets/github.json'

function GitHubCard({data={id:1,image:"",title:"",description:"",tags:[],repoLink:'',demoLink:''}}){
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="tags">
            {
                data.tags.map((item,index)=>{
                 return <p key={index} className='tag'>{item}</p>
                })
            }
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo</a>}
        </div>
    </div>
}

const Github = ({windowName, setWindowState}) => {
  return (
   <MacWindow windowName={windowName} setWindowState={setWindowState} width="60vw" height="70vh">
      <div className="cards">
    {
        githubData.map(item=><GitHubCard data={item} key={item.id}/>)
    }
         
      </div>
   </MacWindow>
  )
}

export default Github