import { useState } from 'react';
import { useMutation,useQueryClient } from '@tanstack/react-query';
import axios from 'axios';




const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const queryClient = useQueryClient()
  
  
  const {mutate:createTask,isLoading} =useMutation({
    mutationFn: (taskTitle) => axios.post("http://localhost:3000/api/tasks",{title:taskTitle}),
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['tasks']})
      setNewItemName('')
    },
    onError:(error)=>{console.log(error);}
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName)
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>to do task</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#80B67D" }}
          disabled={isLoading}
        >
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
