import React from 'react'

export default function MyTodo({todo,handleEditInput,handleCheckTodo,handleDeleteTodo}) {
    const [editing,setEditing] = React.useState(false);
    const handleEdit = (e)=>{
        handleEditInput({...todo,label:e.target.value})
    }

    const handleCheck = ()=>{
        handleCheckTodo({...todo,completed:!todo.completed})
    }
    const handleDelete = ()=>{
        handleDeleteTodo(todo.id)
    }
  return (
    <div>
        <input type="checkbox" checked={todo.completed} onChange={handleCheck}/>
        {editing?<input type='text' value={todo.label} onChange={handleEdit}/>:<label >{todo.label}</label>}
        
        <button style={{color:editing?"red":"blue"}} onClick={()=>setEditing(!editing)}>{editing?'save':'edit'}</button>
        <button onClick={handleDelete}>delete</button>
    </div>
  )
}
