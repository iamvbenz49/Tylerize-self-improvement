
import React, { useEffect, useState } from 'react';


  const Calendar = (props) => {
    //let calendarData = new Array(12);
    let json;
    const [selectedDates, setSelectedDates] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const getDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based
    const day = dateObject.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const handleCheckboxChange = (date) => {
    console.log(date)
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
    console.log(selectedDates)
  };
  useEffect(() => {
    const fetchTracker = async () => {
        const response = await fetch("http://localhost:5000/" + props.route);
        
        json = await response.json();
        let arr = [];
        json.forEach(element => {
           
            element.months.forEach(month => {
              console.log(month.month)
              month.days.forEach(day => { 
                let monthString = month.month < 10 ? `0${month.month}` : `${month.month}`;
                let dayString = day < 10 ? `0${day}` : `${day}`;
                let date = `2024-${monthString}-${dayString}`;
                arr.push(date);
                
                console.log(date); 
              })
           //   calendarData[month.month-1] = month.days;
            })
            console.log(selectedDates)
        });
        setSelectedDates([...arr])
    }
    fetchTracker()
  },[])
  useEffect(() => {
    let date = getDate(new Date);
    if(props.isTicked)handleCheckboxChange(date);
  },[props.isTicked])
  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const renderCalendar = (currentYear) => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const calendarDays = [];

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="empty-cell"></div>);
    }

    // Add days with checkboxes
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day).toISOString().split('T')[0];
      calendarDays.push(
        <div key={date} className={`calendar-day ${selectedDates.includes(date) ? 'selected' : ''}`}>
          <label>
            <input
              type="checkbox"
              checked={selectedDates.includes(date)}
              onChange={() => handleCheckboxChange(date)}
            />
            {day}
          </label>
        </div>
      );
    }

    return calendarDays;
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="calendar-container">
      <button className="navigation-button" onClick={handlePrevMonth}>&lt;</button>
      <div className="calendar-box">
        <div className="calendar-navigation">
          <div className="calendar-header">{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</div>
        </div>
        <div className="calendar-grid">
          <div className="day-header">Sun</div>
          <div className="day-header">Mon</div>
          <div className="day-header">Tue</div>
          <div className="day-header">Wed</div>
          <div className="day-header">Thu</div>
          <div className="day-header">Fri</div>
          <div className="day-header">Sat</div>
          {renderCalendar(currentYear)}
        </div>
      </div>
      <button className="navigation-button" onClick={handleNextMonth}>&gt;</button>
    </div>
  );
};

export default Calendar;
