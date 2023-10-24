import React from 'react'
import MyListComposer from './MyListComposer';
import MyTodo from './MyTodo';

export default function MyList() {
    const [todos,setTodos] = React.useState([]);
    const handleAddToDo = (todo)=>{
        setTodos([...todos,todo])
        console.log(todos);
    }
    const handleEditInput = (upTodo)=>{
        const newTodos = todos.map((todo)=>{
            if(todo.id===upTodo.id){
                return upTodo
        }else{
            return todo
        }
    })
    
        setTodos(newTodos)
    }

    const handleCheckTodo = (newCheck)=>{
        const newTodos = todos.map((todo)=>{
            if(newCheck.id===todo.id){
                return newCheck
            }else{
                return todo
            }
            
        })
        setTodos(newTodos)
     }
    const handleDeleteTodo = (id)=>{
        const newTodos = todos.filter((todo)=>todo.id!==id)
        setTodos(newTodos)
    }
  return (
    <>
    <MyListComposer todos={todos} handleAddTodo={handleAddToDo}/>
    {todos.map((todo)=>{
        return <MyTodo todo={todo} key={todo.id} handleEditInput={handleEditInput} handleCheckTodo={handleCheckTodo} handleDeleteTodo={handleDeleteTodo}/>
    })}
    </>
  )
}
