import React from "react";

import "./modal.css";

export const Modal = ({ isShowing, hide, component }) => {
    if (!isShowing) return;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* <h1>Hi, I'm a modal!</h1> */}
                {component}
                <button onClick={hide}>Aceptar</button>
                <button onClick={hide}>Cerrar</button>
            </div>
        </div>
    );
};
