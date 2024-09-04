import React, { useEffect } from "react";
import "./popUp.css";

const TextPopUp = ({ popUpTitle, textContent, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000); 
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="popup">
            <div className="popup-header">
                <h3 className="popup-title">Warning</h3>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
            <p className="popup-text">{textContent}</p>
            <div className="popup-footer">
                <button className="footer-button" onClick={onClose}>OK</button>
                <button className="footer-button" onClick={onClose}>Cancel</button>
            </div>
    </div>
    );
};

export default TextPopUp;