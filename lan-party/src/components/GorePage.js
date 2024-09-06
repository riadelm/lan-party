import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./GorePage.css";
import gif1 from "../assets/death/Gore 1.gif"
import gif2 from "../assets/death/Gore 2.gif"
import gif3 from "../assets/death/Gore 4.gif"
import gif4 from "../assets/death/Gore 5.gif"
import png1 from "../assets/death/Click-Thru Gore 2.png"
import png2 from "../assets/death/Click-Thru Gore 3.png"
import png3 from "../assets/death/Click-Thru Gore 5.png"
import png4 from "../assets/death/Click-Thru Gore 8.png"


const GorePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path); 
    };

    const gifs = [gif1, gif2, gif3, gif4];
    const pngs = [png1, png2, png3, png4];

    const handleImageClick = () => {
        // Increment index and check if the user has reached the end of the list
        if (currentIndex < pngs.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          // If it's the last item in the list, redirect to another page
          navigateTo('/');
        }
    };

    return (
        <div className="gore-container">
           <img src={gifs[currentIndex]} alt="Background Gif" className="background-gif" />
           <img
                src={pngs[currentIndex]}
                alt="Clickable PNG"
                className="middle-png"
                onClick={handleImageClick}
            />
        </div>
    );
};
    
export default GorePage;