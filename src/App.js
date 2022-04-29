import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";


function App() {
  const [info, setInfo] = useState(false);
  const [data, setData] = useState({});
  const handleClick = () => {
    fetch("http://localhost:8000/testAPI")
      .then((res) => res.text())
      .then((res) => setData(JSON.parse(res)));
    setInfo(true);
  };

  return (
    <div className="App">
      <h1>Location Tracker</h1>
      <Button variant="contained" onClick={handleClick}>
        Track packet
      </Button>
      {info ? (
        <div>
          <div className="item">
            <h4> IP address:</h4>&emsp; <p> {data.ip}</p>
          </div>
          {/* <div className="item">
            <h4> Route:</h4>&emsp; <p> {data.asn.route}</p>
          </div> */}
          <div className="item">
            <h4> Continent:</h4>&emsp; <p> {data.continent_name}</p>
          </div>
          <div className="item">
            <h4> Latitude:</h4>&emsp; <p> {data.latitude}</p>
          </div>
          <div className="item">
            <h4> Longitude:</h4>&emsp; <p> {data.longitude}</p>
          </div>
          <div className="item">
            <h4> Country name:</h4>&emsp; <p> {data.country_name}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
