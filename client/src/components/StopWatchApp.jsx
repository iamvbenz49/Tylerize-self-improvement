import React, { useState, useEffect } from 'react';
import "../styles/mediatate.css";




const StopwatchApp = (props) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };
const handleHoursChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setHours(Math.max(0, value)); // Ensure hours are non-negative
  };
  
const handleMinutesChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setMinutes(Math.max(0, value)); // Ensure minutes are non-negative
  };
  
  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
       //   props.onTick();
          handleStop();
        } else {
          if (seconds === 0) {
            if (minutes === 0) {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
            } else {
              setMinutes((prevMinutes) => prevMinutes - 1);
            }
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hours]);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="timer-container mb-4">
        <h2>StopWatch</h2>
        <div className="timer-circle">
          <p className="display-4">
            {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(
              2,
              '0'
            )}:${String(seconds).padStart(2, '0')}`}
          </p>
        </div>
      </div>
      <div className="input-container mt-4">
        <label className="me-2">
          Hours:
          <input
            type="number"
            className="form-control mx-6"
            value={hours}
            onChange={handleHoursChange}
          />
        </label>
        <label>
          Minutes:
          <input
            type="number"
            className="form-control mx-2"
            value={minutes}
            onChange={handleMinutesChange}
          />
        </label>
      </div>
      <div className="button-container mt-3">
        <button className="btn btn-success me-2" onClick={handleStart}>
          <i className="fas fa-play"></i> Play
        </button>
        <button className="btn btn-danger me-2" onClick={handleStop}>
          <i className="fas fa-stop"></i> Stop
        </button>
        <button className="btn btn-warning" onClick={handleReset}>
          <i className="fas fa-redo"></i> Restart
        </button>
      </div>
    </div>
  );
};

export default StopwatchApp;
