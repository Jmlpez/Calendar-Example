import React from "react";
import Calendar from "react-calendar";
import { useCalendar } from "./MyCalendarProvider";

import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";

export const MyCalendar = () => {
    const { calendarState, setCalendarState } = useCalendar();

    const handleCalendarDate = (value, e) => {
        setCalendarState({
            type: "set-range",
            payload: value,
        });
    };

    const handleStartTime = (e) => {
        setCalendarState({
            type: "set-start-time",
            payload: e.target.value,
        });
    };
    const handleEndTime = (e) => {
        setCalendarState({
            type: "set-end-time",
            payload: e.target.value,
        });
    };

    return (
        <section className="my-calendar">
            <div className="calendar-container">
                <Calendar onChange={handleCalendarDate} value={calendarState.date} selectRange={true} />
            </div>
            <section className="event-time">
                <div className="event-time--start">
                    <span>Hora Inicial:</span>
                    <input
                        className="event-time__input"
                        type="time"
                        value={calendarState.startTime}
                        onChange={handleStartTime}
                    />
                </div>
                <div className="event-time--end">
                    <span>Hora Final:</span>
                    <input
                        className="event-time__input"
                        type="time"
                        value={calendarState.endTime}
                        onChange={handleEndTime}
                    />
                </div>
            </section>
        </section>
    );
};
