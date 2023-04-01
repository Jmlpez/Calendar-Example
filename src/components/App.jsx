import { useModal } from "../hooks/useModal";
import "./App.css";
import { Modal } from "./Modal/Modal";
import { MyCalendar } from "./MyCalendar/MyCalendar";

export const App = () => {
    const { isShowing, toggle } = useModal();

    return (
        <div className="app">
            <h1 className="">App example</h1>
            <button onClick={toggle}>Agregar Evento</button>

            <Modal isShowing={isShowing} hide={toggle} component={<MyCalendar />} />
        </div>
    );
};
