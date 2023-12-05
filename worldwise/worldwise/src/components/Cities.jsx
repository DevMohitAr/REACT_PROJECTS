import React from 'react'
import { CityItem } from './CityItem';
import { useGlobalContext } from './Context';
export const Cities = () => {
  const {cities,setCities} = useGlobalContext()

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8001/cities");
      const data = await res.json();
      setCities(data)
    };
    fetchData();
  },[]);
  return <div style={{maxWidth:"380px",margin:"0 auto",display:"flex",flexShrink:0,flexDirection:"column",height:"600px"}}>{cities && cities.map((city)=>{
    return <CityItem key={city.id} city={city}/>
  })}</div>;


};
