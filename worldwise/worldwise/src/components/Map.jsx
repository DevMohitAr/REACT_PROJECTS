import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MapContainer,Popup,Marker,TileLayer, useMap, useMapEvents } from 'react-leaflet'
import { useGlobalContext } from './Context'
export const Map = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    
    const {mapPosition,setMapPosition,currentCity,setMyDis,setMapLoading,cities} = useGlobalContext()
    const mapLat=searchParams.get('lat')
    const mapLng=searchParams.get('lng')
    
    
 
   const navigate =  useNavigate()
   React.useEffect(()=>{
    if(mapLat && mapLng){
     setMapPosition([mapLat, mapLng]);
    }
   
   },[mapLat,mapLng])

  
    const handleFunction = ()=>{
      if ("geolocation" in navigator) {
        // Geolocation is available
        navigator.geolocation.getCurrentPosition(function (position) {
          
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // You can now use the latitude and longitude for your needs.
          setMapLoading(true)
          setMapPosition([latitude, longitude]);
          const newDistance = haversine(
            currentCity.position.lat,
            currentCity.position.lng,
            latitude,
            longitude
          );
          setMapLoading(false)
          setMyDis(newDistance)
    
          
         
        });
      } else {
        // Geolocation is not available in this browser
        console.log("Geolocation is not available.");
      }
    }
  
  return (
    <div style={{ flex: 1,position:"relative",zIndex:3 }}>
      <button style={{ backgroundColor: "#065f46", color: "#bbf7d0",padding:"0.5rem 0.9rem",position:"absolute",bottom:"50px",right:"10px",zIndex:1000 }} onClick={handleFunction}>
      your current position
      </button>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities &&
          cities.map((city) => (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
          <Marker position={mapPosition}>

          </Marker>
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

const ChangeCenter = ({position})=>{
  const map = useMap();
  map.setView(position)
  return null;
}

const DetectClick = ()=>{
  const navigate=useNavigate()
  useMapEvents({
    click:(e)=>{
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    }
  })
}
function haversine(lat1, lon1, lat2, lon2) {
  // Radius of the Earth in kilometers
  const R = 6371;

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lon1Rad = (lon1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const lon2Rad = (lon2 * Math.PI) / 180;

  // Haversine formula
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}
