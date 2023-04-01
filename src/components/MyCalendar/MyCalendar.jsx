import React, { useState } from "react";
import Calendar from "react-calendar";
import { MyTimePicker } from "./MyTimePicker";

import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";

export const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    // if (date.length > 0)
    // console.log(date[0], date[1], date[0].toDateString() === date[1].toDateString();
    return (
        <section className="my-calendar">
            <div>Seleccione la fecha inicial y final del evento</div>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} selectRange={true} />
            </div>
            <section className="event-time">
                <div className="event-time--start">
                    <span>Hora Inicial:</span>
                    <MyTimePicker />
                </div>
                <div className="event-time--end">
                    <span>Hora Final:</span>
                    <MyTimePicker />
                </div>

                {/* <div className="event-time--end">Hora Final:</div> */}
            </section>
            {date.length > 0 && (
                <p className="text-center" style={{ margin: "1rem" }}>
                    <span className="bold">Inicio:</span> {date[0].toDateString()}
                    &nbsp;|&nbsp;
                    <span className="bold">Fin:</span> {date[1].toDateString()}
                </p>
            )}
        </section>
    );
};
