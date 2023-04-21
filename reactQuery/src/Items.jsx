 import SingleItem from './SingleItem';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

 
const Items = () => {
  const {isLoading,data,isError} = useQuery({
    queryKey: ["tasks"],
    queryFn:async () =>{
     const {data}=await axios.get("http://localhost:3000/api/tasks");
     return data
    } 
  });
  console.log(data);  
 if(isLoading){
  return <p>loading......</p>
 }
 if (isError) {
   return <p>error......</p>;
 }
  
  return (
    <div className='items'>
    { data.taskList.map((item)=>{
      return <SingleItem key={item.id} {...item}/>
    })}
     
    </div>
  );
};
export default Items;
