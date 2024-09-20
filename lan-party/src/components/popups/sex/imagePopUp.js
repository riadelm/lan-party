import React from "react";
import "./popUp.css";

const ImagePopUp = ({ popUpTitle, imageUrl, onClose }) => {

    return (
        <div className="virus-popup">
            <img src={imageUrl} alt="Popup" className="virus-popup-image" />
    </div>
    );
};

export default ImagePopUp;