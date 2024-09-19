import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./IdentityPage.css";
import fb from "../assets/identity/FaceBook Page 2.png"



const IdentityPage = () => {

    useEffect(() => {
        // Scroll to top of the page when component is mounted
        window.scrollTo(0, 0);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path); 
    };

    return (
        <div className="id-container">
            <img src={fb} alt="facebook.com" className="id-background" />
        </div>
    );
};
    
export default IdentityPage;