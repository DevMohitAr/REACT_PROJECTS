import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from './Context';

export const CityItem = ({city}) => {
  const {id,position} = city;
  const {currentCity} = useGlobalContext()
 
  return (
    <div
      style={{
        boxShadow: "2px 4px 8px rgba(0,0,0,0.5)",
        marginBottom: "20px",
        padding: "16px",
        borderColor: currentCity.id === city.id ? "#22c55e" : "",
        color: "#f3f4f6",
        display: "flex",
        flexDirection: "column",
        borderWidth: "2px",
        backgroundColor: "#374151",
      }}
    >
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{city.cityName}</h3>
          <p>{city.emoji}</p>
        </div>
      
      </Link>
    </div>
  );
}
