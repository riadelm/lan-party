import React, { useEffect } from "react";
import "./popUp.css";

const SystemPopUp = ({ imageUrl, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 2500);
        return () => clearTimeout(timer);
    }, [onClose]);

    // Get the viewport dimensions and scroll positions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    // Generate random positions within the viewport, considering the scroll
    const randomX = Math.floor(Math.random() * (viewportWidth - 200)) + scrollX;
    const randomY = Math.floor(Math.random() * (viewportHeight - 200)) + scrollY;

    return (
        <div className="system-popup" style={{ top: randomY, left: randomX }}>
            <img src={imageUrl} alt="Popup" className="popup-image" />
        </div>
    );
};

export default SystemPopUp;