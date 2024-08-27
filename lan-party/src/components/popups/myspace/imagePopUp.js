import React, { useEffect } from "react";
import "./popUp.css";

const ImagePopUp = ({ popUpTitle, imageUrl, onClose }) => {
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
        <div className="popup" style={{ top: randomY, left: randomX }}>
            <div className="popup-header">
                <h3 className="popup-title">{}</h3>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
            <img src={imageUrl} alt="Popup" className="popup-image" />
            <div className="popup-footer">
                <button className="footer-button" onClick={onClose}>OK</button>
                <button className="footer-button" onClick={onClose}>Cancel</button>
            </div>
    </div>
    );
};

export default ImagePopUp;