import { useState } from "react";
import { Header } from "./componets/Header";
import "./app.css";
export const lanes = [
  { id: 1, title: "To Do", laneNo: 1 },
  { id: 2, title: "InProgress", laneNo: 2 },
  { id: 3, title: "Review", laneNo: 3 },
  { id: 4, title: "Done", laneNo: 4 },
];

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 5,
      title: "Fix Nav bug",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error et ab autem consequuntur. Aliquam impedit iusto laudantium nesciunt eaque non.",
      lane: 1,
    },
    {
      id: 6,
      title: "Release new  Website",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error et ab autem consequuntur. Aliquam impedit iusto laudantium nesciunt eaque non.",
      lane: 3,
    },
    {
      id: 7,
      title: "Change Button Color",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error et ab autem consequuntur. Aliquam impedit iusto laudantium nesciunt eaque non.",
      lane: 3,
    },
    {
      id: 8,
      title: "Deploy Server",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error et ab autem consequuntur. Aliquam impedit iusto laudantium nesciunt eaque non.",
      lane: 3,
    },
    {
      id: 9,
      title: "Change Layout",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error et ab autem consequuntur. Aliquam impedit iusto laudantium nesciunt eaque non.",
      lane: 2,
    },
    {
      id: 10,
      title: "Complete the registration flow",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error et ab autem consequuntur. Aliquam impedit iusto laudantium nesciunt eaque non.",
      lane: 4,
    },
    {
      id: 11,
      title: "Create Db instance",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error et ab autem consequuntur. Aliquam impedit iusto laudantium nesciunt eaque non.",
      lane: 4,
    },
  ]);

  const handleDrop = (e,laneNo) => {
    console.log(laneNo);
    e.preventDefault()
       let id = e.dataTransfer.getData("id");
       id = Number(id);

      const updatedTasks = tasks.map((task)=>{
        if(task.id===id){
          return {...task,lane:laneNo}
        }else{
          return task
        }
      })
   setTasks(updatedTasks);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
 
  };
  const handleStart = (e, id) => {
    e.dataTransfer.setData("id",id);
  };
  return (
    <>
      <p className="bg-cyan-900 text-6xl text-center py-10 text-cyan-100">
        Task Management
      </p>
      <Header
        tasks={tasks}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleStart={handleStart}
      />
    </>
  );
}

export default App;
