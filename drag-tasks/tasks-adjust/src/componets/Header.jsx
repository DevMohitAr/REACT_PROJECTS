
import { Lane } from "./Lane";
import { lanes } from "./../App";

export const Header = ({tasks,handleDragOver,handleDrop,handleStart}) => {
  return (

    <div className="grid grid-cols-4 gap-4 h-screen">
      {lanes.map((lane) => {
        const taskList = tasks.filter((task) => task.lane === lane.laneNo);
        return <Lane key={lane.id} taskList={taskList} lane={lane} handleDragOver={handleDragOver} handleDrop={handleDrop} handleStart={handleStart}/>;
      })}
    </div>
  );
};
