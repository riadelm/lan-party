import React, {useEffect, useRef} from "react";
import "./popUp.css";
import basso from '../../../assets/audio/basso.mp3'

const ImagePopUp = ({ popUpTitle, imageUrl, onClose }) => {

    const bassoAudio = useRef(null);

    useEffect(() => {
        bassoAudio.current = new Audio(basso);
    }, []);

    const playBassoSound = () => {
        bassoAudio.current.currentTime = 0; // Reset to start
        bassoAudio.current.play();
    };

    return (
        <div className="virus-popup">
            <img src={imageUrl} alt="Popup" className="virus-popup-image" onClick={() => playBassoSound()}/>
    </div>
    );
};

export default ImagePopUp;