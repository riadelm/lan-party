import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./IdentityPage.css";
import HomeIcon from './popups/homebtn/home';
import ImagePopUp from "./popups/sex/imagePopUp";
import fb from "../assets/identity/FaceBook Page Updated.png";
import virus from "../assets/sex/Porn Virus 2.gif";
import virusSound from "../assets/audio/Windows XP Error Sound.mp3"



const IdentityPage = () => {

    const virusAudio = useRef(null);

    useEffect(() => {
        virusAudio.current = new Audio(virusSound);
    }, []);

    const playVirusSound = () => {
        virusAudio.current.currentTime = 0; // Reset to start
        virusAudio.current.play();
    };

    useEffect(() => {
        // Scroll to top of the page when component is mounted
        window.scrollTo(0, 0);
    }, []);

    const [showVirus, setShowVirus] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          playVirusSound();
          setShowVirus(true);
        }, 15000); // 10 seconds
    
        // Cleanup the timer if the component is unmounted
        return () => clearTimeout(timer);
      }, []);

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path); 
    };

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigateTo("/");
        }, 25000); // 25 seconds

        // Cleanup the timeout if the component unmounts before 5 minutes
        return () => clearTimeout(redirectTimer);
    }, [navigate]);

    return (
        <div className="id-container">
            <HomeIcon />
             {showVirus && (
                <ImagePopUp popUpTitle="!! PORN VIRUS !!" imageUrl={virus}/>
            )}
            <img src={fb} alt="facebook.com" className="id-background" />
        </div>
    );
};
    
export default IdentityPage;