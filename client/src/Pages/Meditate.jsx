import "../styles/mediatate.css";
import Calendar from "../components/Calendar";
import StopwatchApp from "../components/StopWatchApp";
import { useState } from "react";
import { useEffect } from "react";

const Meditate = () => {
  const [tick,SetTick] = useState(false);
  const tickDate = () => {
    console.log("Ticked");
    SetTick(true);
    const upload = async (e) => {
      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      const date = {day,month};
      const response = await fetch("http://localhost:5000/meditation", {
          method:"PUT",
          body: JSON.stringify(date),
          headers: {
              "Content-Type": "application/json"
            }
          })
          
          const json = await response
          console.log(response.ok)
          if(!response.ok){
              console.log("Not Done")
          }
          if(response.ok){
            console.log("Done");
          }
    };
    upload();
  }
  
  return (
    <>
    <div className="app-container">
      <div className="left-side">
        <StopwatchApp onTick = {tickDate} />
      </div>
      <div className="right-side">
        <Calendar isTicked = {tick} route = {"meditation"}/>
      </div>
    </div>
    </>
  );
}

export default Meditate;
