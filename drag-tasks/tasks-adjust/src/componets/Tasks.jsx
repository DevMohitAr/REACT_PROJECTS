import React from 'react'

export const Tasks = ({task,handleStart}) => {
 
  return (
    <div onDragStart={(e)=>handleStart(e,task.id)} className="rounded-md bg-cyan-300 text-cyan-900 p-4 mb-5" draggable>
        <h2 className="text-blue-900 font-bold text-lg">{task.title}</h2>
        <p className='text-blue-900'>{task.details}</p>
    </div>
  )
}
