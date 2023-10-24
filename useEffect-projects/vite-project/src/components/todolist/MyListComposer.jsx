import React from 'react'
   let id = 0;
export default function MyListComposer({todos,handleAddTodo}) {
    const [label,setLabel] = React.useState('');
 
    const handleSubmit = (e)=>{
        e.preventDefault();
      handleAddTodo({id:id++,label,completed:false})
      setLabel('')

    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={label} onChange={(e)=>setLabel(e.target.value)} />
        <button type='submit'>add an item</button>
    </form>
  )
}
