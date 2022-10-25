import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div className="main-traffic-light">
      <div
        onClick={() => setSelectedColor("red")}
        className={
          "light redLight" + (selectedColor === "red" ? " glowEffect" : "")
        }
      ></div>
      <div
        onClick={() => setSelectedColor("yellow")}
        className={
          "light yellowLight" +
          (selectedColor === "yellow" ? " glowEffect" : "")
        }
      ></div>
      <div
        onClick={() => setSelectedColor("green")}
        className={
          "light greenLight" + (selectedColor === "green" ? " glowEffect" : "")
        }
      ></div>
    </div>
  );
};

export default Home;
