import React, { useState } from "react";

export const InputTimePicker = ({ min, max }) => {
    const [time, setTime] = useState(min);
    const handleInputChange = (event) => {
        setTime((t) => {
            if (event.target.validity.valid) {
                if (event.target.value === "") return 0;
                return event.target.value >= min && event.target.value <= max ? event.target.value : t;
            }
            return t;
        });
    };
    const lessTime = () => {
        setTime((t) => {
            return t > min ? t - 1 : t;
        });
    };
    const plusTime = () => {
        setTime((t) => {
            return t < max ? t + 1 : t;
        });
    };
    return (
        <div className="time-picker__input-container">
            <button className="time-picker__btn" onClick={() => plusTime()}>
                +
            </button>
            <input
                className="time-picker__input"
                type="text"
                pattern="[0-9]*"
                value={time}
                onChange={handleInputChange}
            />
            <button className="time-picker__btn" onClick={() => lessTime()}>
                -
            </button>
        </div>
    );
};
