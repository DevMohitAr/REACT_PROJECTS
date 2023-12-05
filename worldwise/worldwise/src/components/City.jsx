import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from './Context'
import "leaflet-geometryutil";

export const City = () => {
  const { id } = useParams();
  const { getCity, currentCity, mapPosition,myDis,cityLoading,mapLoading,setMyDis} = useGlobalContext();
 const navigate=useNavigate()
  const handleClick = ()=>{
    navigate(-1)
  }
 
  
  
  React.useEffect(() => {
    getCity(id);
    setMyDis('')

  }, [id]);
  const { cityName, country, emoji, notes } = currentCity;
 
  return (
    <div
      style={{
        maxWidth: "320px",
        margin: "0 auto",
        border: "2px solid",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "4rem 2rem",
        backgroundColor: "#3f3f46",
        color: "#f3f4f6",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <p>{cityName}</p>
        <h3>{emoji}</h3>
      </div>
      <p>{notes}</p>
      <h4>{country}</h4>
      <h1 style={{}}>
        {myDis && (
          <span>
            {"distance from your current location is "}
            <span style={{ color: "#facc15" }}>{`${Math.ceil(myDis)} km`}</span>
          </span>
        )}
      </h1>
      <button
        onClick={handleClick}
        style={{
          color: "#16a34a",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        back
      </button>
    </div>
  );
}
