import React from 'react'
import { useState } from 'react'
import Header from './app/header'
import './index.css'
import Task from './dhd/Task'

const App = () => {
  const [tasks,setTasks] = useState([
      {id:1,text:"Hello friends"},
      {id:2,text:"hello everyone"},
      {id:3,text:"yundaa bronji"}
  ])

  // task ustgah function

  const delete_task = (id)=>{
    setTasks(tasks,filter((task)=>task.id !==id))
  }

  return (
    <div className='container'>
      <Header />
      {
        tasks.length > 0 ? (<Task onAdd={delete_task} tasks={tasks} />) :(<h1 className='hudluh'>hooson baina</h1>)
      }
    </div>
  )
}

export default App
