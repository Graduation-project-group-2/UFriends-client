import React, { useState, useEffect } from 'react';
import check from "../img/check.png";
import '../styles/Calendar.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const storedAttendance = localStorage.getItem('attendance');
    if (storedAttendance) {
      setChecked(JSON.parse(storedAttendance));
    }
  }, []);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const buildCalendar = () => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysThisMonth = daysInMonth(date.getMonth(), date.getFullYear());
    const weeks = [];

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push('');
        } else if (day > daysThisMonth) {
          break;
        } else {
          week.push(day);
          day++;
        }
      }
      weeks.push(week);
    }

    return weeks;
  };

  const handleAttendanceCheck = () => {
    setChecked(true);
  };

  const calendar = buildCalendar();

  return (
    <div className="Calendar">
      <h2>{monthNames[date.getMonth()]} {date.getFullYear()}</h2>
      <table>
        <thead>
          <tr>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td key={index}>
                  {day === date.getDate() && checked ? (
                    // <img src={checked} alt="checked" width="20" />
                    <img id="TitleImg" src={check} alt="IMG" width ='25'/>
                  ) : (
                    day
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAttendanceCheck}>Check Attendance</button>
    </div>
  );
};

export default Calendar;