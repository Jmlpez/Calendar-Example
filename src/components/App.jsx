import "./App.css";
import { MyCalendar } from "./MyCalendar/MyCalendar";
import { CalendarProvider } from "./MyCalendar/MyCalendarProvider";

export const App = () => {
    return (
        <CalendarProvider>
            <MyCalendar />
        </CalendarProvider>
    );
};
