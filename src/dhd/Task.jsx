import React from 'react'
import Item from './Item'


const Task = (tasks,onAdd) => {
  return (
    <div>
      {tasks.map((task)=>(
        <Item task={task} key={task.id} onAdd={onAdd}/>
      ))}
    </div>
  )
}

export default Task
