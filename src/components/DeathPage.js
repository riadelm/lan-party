import React, { useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import "./DeathPage.css";
import HomeIcon from './popups/homebtn/home';
import death from "../assets/death/Death Image rough.png";
import wound from "../assets/death/Scar Remodeled.png";

const DeathPage = () => {

    useEffect(() => {
        // Scroll to top of the page when component is mounted
        window.scrollTo(0, 0);
    }, []);
    
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path); 
    };

    return (
        <div className="death-container">
            <HomeIcon />
            <img src={death} className="background" />
            <svg class="hover-mask" width="0" height="0" style={{border: "3px solid black", zIndex:1002}}>
                <defs>
                <clipPath id="image-mask" clipPathUnits="objectBoundingBox">
                    <path d="M0.4,0.3 L0.8,0.4 L0.4,0.8 L0.1,0.4 Z" fill="none" stroke="black" stroke-width="2"/>
                </clipPath>
                </defs>
            </svg>
            <img src={wound} className="button" onClick={() => navigateTo('/suicide')}/>  
        </div>
    );
};
    
export default DeathPage;