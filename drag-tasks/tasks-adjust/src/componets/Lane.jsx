import React from 'react'
import { Tasks } from './Tasks';

export const Lane = ({taskList,lane,handleDragOver,handleDrop,handleStart}) => {


  return (
    <div className="px-3 py-4" onDrop={(e)=>handleDrop(e,lane.laneNo)} onDragOver={handleDragOver} >
      <p className="bg-cyan-700 p-3 text-center rounded-md text-2xl text-cyan-100">{lane.title}</p>
{taskList.map((task)=>{
    return <Tasks key={task.id} task={task} handleStart={handleStart}/>
})}

    </div>
  )
}
