import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./IdentityPage.css";
import HomeIcon from './popups/homebtn/home';
import ImagePopUp from "./popups/sex/imagePopUp";
import fb from "../assets/identity/FaceBook Page Updated.png"
import virus from "../assets/sex/Porn Virus 2.gif"



const IdentityPage = () => {

    useEffect(() => {
        // Scroll to top of the page when component is mounted
        window.scrollTo(0, 0);
    }, []);

    const [showVirus, setShowVirus] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowVirus(true);
        }, 10000); // 10 seconds
    
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
        }, 20000); // 5 minutes in milliseconds

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