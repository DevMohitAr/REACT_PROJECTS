import React from "react";
const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [myDis, setMyDis] = React.useState(null);
  const [mapPosition, setMapPosition] = React.useState([51.505, -0.09]);
  const [cities, setCities] = React.useState([]);
  const [currentCity,setCurrentcity]=React.useState('')
  const [mapLoading,setMapLoading] = React.useState(false);
  const [cityLoading,setCityLoading]=React.useState(false)
 const getCity = async (id) => {
  setCityLoading(true)
   const res = await fetch(`http://localhost:8001/cities/${id}`);
   const data = await res.json();
   setCityLoading(false)
   setCurrentcity(data)
 };
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((geo) => {
      setMapPosition([geo.coords.latitude, geo.coords.longitude]);
    });
  }, []);
  
  return (
    <Context.Provider
      value={{
        mapPosition,
        setMapPosition,
        cities,
        setCities,
        getCity,
        currentCity,
        myDis,
        setMyDis,
        mapLoading,
        setMapLoading,
        cityLoading,
        setCityLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(Context);
};
