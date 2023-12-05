import React from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useSearchParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "./Context";
export const Form = () => {
  const [cityName, setCityName] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [searchParams, setSearchParams] = useSearchParams();
  const matLat = searchParams.get("lat");
  const matLng = searchParams.get("lng");
  const navigate = useNavigate();
  const { setCities, cities } = useGlobalContext();
  React.useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${matLat}&longitude=${matLng}`
      );
      const data = await res.json();
      if (!data.city) return null;
      setCityName(data.city);
    };
    fetchdata();
  }, [matLat, matLng]);
 
 const fetchData = async (newCity) => {
      const res = await fetch(
        `http://localhost:8001/cities`,

        {
          method: "POST",
          body: JSON.stringify(newCity),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
    };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = {cityName,startDate,position:{lat:matLat,lng:matLng},country:"",emoji:"",notes:""}
    fetchData(newCity)
    setCities([...cities,newCity])
    navigate("/app/cities");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "320px",
        margin: "0 auto",
        backgroundColor: "#6b7280",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          border: "2px solid",
          padding: "1rem 2rem",
          flexDirection: "column",
          gap: "1rem",
          color: "#f5f5f4",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor=""
            style={{
              display: "block",
              marginBottom: ".5rem",
              textTransform: "capitalize",
            }}
          >
            name
          </label>
          <input
            type="text"
            name="name"
            placeholder="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            style={{
              border: "2px solid",
              width: "100%",
              padding: "0.75rem 1.25rem",
              color: "black",
            }}
          />
        </div>
        <div style={{ color: "black" }}>
          <label
            htmlFor=""
            style={{ display: "block", marginBottom: ".5rem", color: "white" }}
          >
            date
          </label>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            icon="fa fa-calendar"
          />
        </div>
        <button
          style={{
            alignSelf: "stretch",
            color: "#292524",
            padding: "0.5rem 1rem",
            marginTop: "1.25rem",
            backgroundColor: "#f5f5f5",
            textTransform: "uppercase",
            fontSize: "32px",
            fontWeight: "bold",
          }}
          type="submit"
        >
          add
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          back
        </button>
      </form>
    </div>
  );
};
