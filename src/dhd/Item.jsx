import React from 'react'
import { FcFullTrash } from "react-icons/fc";

const Item = (task,onAdd) => {
  return (
    <div className='task'>
        <h3>
            {task.text}
            <FcFullTrash onClick={()=>onAdd(task.id)}/>
        </h3>
    </div>
  )
}

export default Item
