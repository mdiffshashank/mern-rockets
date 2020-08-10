import React, { useState, useEffect } from "react";
import axios from "axios";
import RocketCard from "./RocketCard";
import rocketsStyle from "./Rockets.module.css";
import { useSelector } from "react-redux";

function Rockets() {
  const [rockets, setRockets] = useState([]);
  const [url, setUrl] = useState(
    "https://api.spaceXdata.com/v3/launches?limit=5"
  );

  const year = useSelector((state) => state.year);
  const launch = useSelector((state) => state.launchStatus);
  const landing = useSelector((state) => state.landingStatus);

  useEffect(() => {
    if (launch !== null && landing !== null && year !== null) {
      setUrl(
        `https://api.spaceXdata.com/v3/launches?limit=5&launch_success=${launch}&land_success=${landing}&launch_year=${year}`
      );
      //setUrl((url) => `${url}&launch_success=${launch}`);
    } else if (launch !== null && landing !== null) {
      setUrl(
        `https://api.spaceXdata.com/v3/launches?limit=5&launch_success=${launch}&land_success=${landing}`
      );
      //setUrl((url) => `${url}&launch_success=${launch}`);
    } else if (launch !== null && year !== null) {
      setUrl(
        `https://api.spaceXdata.com/v3/launches?limit=5&launch_success=${launch}&launch_year=${year}`
      );
      //setUrl((url) => `${url}&launch_success=${launch}`);
    } else if (landing !== null && year !== null) {
      setUrl(
        `https://api.spaceXdata.com/v3/launches?limit=5&land_success=${landing}&launch_year=${year}`
      );
      //setUrl((url) => `${url}&launch_success=${launch}`);
    } else if (launch !== null) {
      setUrl(
        `https://api.spaceXdata.com/v3/launches?limit=5&launch_success=${launch}`
      );
      //setUrl((url) => `${url}&launch_success=${launch}`);
    } else if (landing !== null) {
      setUrl(
        `https://api.spaceXdata.com/v3/launches?limit=5&land_success=${landing}`
      );
      //setUrl((url) => `${url}&land_success=${landing}`);
    } else if (year !== null) {
      setUrl(
        `https://api.spaceXdata.com/v3/launches?limit=5&launch_year=${year}`
      );
      //setUrl((url) => `${url}&launch_year=${year}`);
    } else {
      setUrl(url);
    }

    console.log("iseEffect re render");
    console.log(`URL: ${url}`);

    axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          console.log("Data fetched Successfully.");
          console.log(res.data);
          setRockets(res.data);
        } else {
          console.log("Not fetched");
          console.log(`status ${res.status}`);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      console.log("unmount");
    };
  }, [url, landing, launch, year]);

  return (
    <div className={rocketsStyle.rockets}>
      {rockets.map((v, i) => {
        return <RocketCard key={i} value={v} />;
      })}
    </div>
  );
}

export default Rockets;
