import React, { useEffect } from "react";
import "./popUp.css";

const SystemPopUp = ({ imageUrl, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 2500);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="system-popup">
            <img src={imageUrl} alt="Popup" className="popup-image" />
        </div>
    );
};

export default SystemPopUp;