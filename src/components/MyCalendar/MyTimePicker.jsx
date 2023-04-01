import React, { useState } from "react";

// import { TimePicker } from "react-ios-time-picker";
import { InputTimePicker } from "./InputTimePicker";
import "./MyTimePicker.css";

export const MyTimePicker = () => {
    const [dayTime, setDayTime] = useState(false);

    const handleDayTime = () => {
        setDayTime(!dayTime);
    };

    return (
        <div className="time-picker__container">
            <InputTimePicker min={1} max={12} />
            <span className="time-picker__separator">:</span>
            <InputTimePicker min={0} max={59} />
            <button
                className="time-picker__day-time-btn"
                onClick={() => {
                    handleDayTime();
                }}
            >
                {dayTime ? "AM" : "PM"}
            </button>
        </div>
    );
};
