import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./GorePage.css";
import HomeIcon from './popups/homebtn/home';
import LoadingScreen from "./popups/loading/loading"
import loadingGif from "../assets/homepage/loading/loadingbar1.gif"
import gif1 from "../assets/death/Gore 1.gif"
import gif2 from "../assets/death/Gore 2.gif"
import gif3 from "../assets/death/Gore 3.gif"
import gif4 from "../assets/death/Gore 4.gif"
import gif5 from "../assets/death/Gore 5.gif"
import gif6 from "../assets/death/Gore 6.gif"
import gif7 from "../assets/death/Gore 7.gif"
import gif8 from "../assets/death/Gore 8.gif"
import png1 from "../assets/death/Click-Thru Gore 2.png"
import png2 from "../assets/death/Click-Thru Gore 3.png"
import png3 from "../assets/death/Click-Thru Gore 4.png"
import png4 from "../assets/death/Click-Thru Gore 5.png"
import png5 from "../assets/death/Click-Thru Gore 8.png"
import png6 from "../assets/death/Click-Thru Gore 7.png"
import png7 from "../assets/death/Click-Thru Gore 6.png"
import png8 from "../assets/death/Click-Thru Gore 1.png"
import click from '../assets/audio/click.mp3'

const GorePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMoving, setIsMoving] = useState(false); // Track whether the image is moving
    const [isClickable, setIsClickable] = useState(true);
    const imageRef = useRef(null); // Reference to the foreground image
    const navigate = useNavigate();
    const [showLoading, setShowLoading] = useState(false);

    const clickAudio = useRef(null);

    useEffect(() => {
    clickAudio.current = new Audio(click);
    }, []);

    const playClickSound = () => {
    clickAudio.current.currentTime = 0; // Reset to start
    clickAudio.current.play();
    };

    const navigateTo = (path) => {
        playClickSound();
        setShowLoading(true);
         setTimeout(() => {
          setShowLoading(false); // Hide loading screen
          navigate(path);        // Navigate to the target path
      }, 10000);

    };
    let moveTimer;

    // Ensure scroll to the top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to navigate to another page

    // Gifs and pngs arrays
    const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8];
    const pngs = [png1, png6, png2, png3, png8, png7, png4, png5];

    // Function to handle foreground image movement on hover
    const handleMouseEnter = () => {
        setIsMoving(true); // Start movement
        moveTimer = setTimeout(() => {
            setIsMoving(false); // Stop movement after 5 seconds
            // Smoothly return the image to the center after 5 seconds
            if (imageRef.current) {
                imageRef.current.style.transition = 'transform 1s ease';
                imageRef.current.style.transform = 'translate(-50%, -50%)';
            }
        }, 60000);
    };

    // Function to handle image click
    const handleImageClick = () => {
        if (!isClickable) return; 
        playClickSound();
        clearTimeout(moveTimer); // Ensure the timer is cleared
        if (imageRef.current) {
            imageRef.current.style.transition = 'none'; // Disable transition
        }

        setIsClickable(false);

        if (currentIndex < pngs.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // If it's the last item in the list, redirect to another page
            navigateTo('/sex');
        }

        setTimeout(() => {
            setIsClickable(true);
        }, 2000); // 2-second delay

        setTimeout(() => {
            if (imageRef.current) {
                imageRef.current.style.transition = 'transform 2s ease'; // Re-enable transition
            }
        }, 50); 
    };

    // Function to make the image move away from the cursor while hovering
    const handleMouseMove = (e) => {
        if (isMoving && imageRef.current) {
            const img = imageRef.current;
            const { clientX: mouseX, clientY: mouseY } = e;
            const { width, height } = img.getBoundingClientRect();

            // Center of the screen
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calculate the distance between the cursor and the image center
            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;

            // Normalize the distance to get a direction (but inversed to move away)
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Adjust movement based on how close the mouse is to the center
            let moveFactor = 2.5; // Slow movement, but we'll adjust it

            // If the mouse is closer to the center, push the image further away
            if (distance < 300) {
                moveFactor = 8.5; // Push more when the mouse is closer to the center
            } else if (distance < 800) {
                moveFactor = 3.5; // Push more when the mouse is closer to the center
            } else if (distance > 800) {
                moveFactor = 2.5; // Very slow if the mouse is far from the center
            }

            // Inverse the movement direction to move away from the mouse
            const moveX = -deltaX * moveFactor;
            const moveY = -deltaY * moveFactor;

            // Constrain the image movement near the edges but never fully move off-screen
            const newTranslateX = Math.max(-80, Math.min(-20, -50 + moveX)); // Stay around center horizontally
            const newTranslateY = Math.max(-80, Math.min(-20, -50 + moveY)); // Stay around center vertically

            // Apply the calculated transformation to move the image away from the cursor
            img.style.transform = `translate(${newTranslateX}%, ${newTranslateY}%)`;
            img.style.transition = 'transform 0.1s ease'; // Smooth movement during hover
        }
    };

    return (
        <div className="gore-container" onMouseMove={handleMouseMove}>
             {showLoading && <LoadingScreen
                color= "black"
                loadingGif={loadingGif}
                width= "10vw"
                />}
            <HomeIcon />
            <img src={gifs[currentIndex]} alt="Background Gif" className="background-gif" />
            <img
                ref={imageRef}
                src={pngs[currentIndex]}
                alt="Clickable PNG"
                className={`middle-png ${!isClickable ? 'non-clickable' : ''}`}
                onMouseEnter={handleMouseEnter}
                onClick={handleImageClick}
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} // Center image initially
            />
        </div>
    );
};

export default GorePage;
