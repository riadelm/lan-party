import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./DeathPage.css";
import death from "../assets/death/Death Image rough.png";
import wound from "../assets/death/Wound Image.png";
import { Link } from 'react-router-dom';

const DeathPage = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path); 
    };

    return (
        <div className="death-container">
            <img src={death} className="background" />
            <svg class="hover-mask" width="0" height="0" style={{border: "3px solid black", zIndex:1002}}>
                <defs>
                <clipPath id="image-mask" clipPathUnits="objectBoundingBox">
                    <path d="M0.4,0.1 L0.7,0.4 L0.4,0.8 L0.1,0.4 Z" fill="none" stroke="black" stroke-width="2"/>
                </clipPath>
                </defs>
            </svg>
            <img src={wound} className="button" onClick={() => navigateTo('/suicide')}/>  
        </div>
    );
};
    
export default DeathPage;