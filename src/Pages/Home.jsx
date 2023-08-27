import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Leftbar from "../Components/Leftbar";
import Rightbar from "../Components/Rightbar";
import Main from "../Components/Main";
import { Outlet } from "react-router-dom";
const Home = ({ username }) => {
  const [data, setData] = useState([]);
  const [fullnames, setFullnames] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("users"); // 'users' is the key you used to store the data

    if (storedData) {
      // If there's data in local storage, parse it and update the state
      try {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          setData(parsedData);
        } else {
          console.error("Retrieved data is not an array:", parsedData);
        }
      } catch (error) {
        console.error("Error parsing data from local storage:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Compare username to data and extract matching fullname
    const matchingUser = data.find((item) => item.name === username);

    if (matchingUser) {
      setFullnames([matchingUser.fullname]);
    } else {
      setFullnames([]);
    }
  }, [data, username]);
  console.log(data);
  console.log(fullnames);
  return (
    <div>
      <Navbar fullnames={fullnames} />
      <div className="flex">
        <Leftbar fullnames={fullnames} />
        <Main fullnames={fullnames} />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
