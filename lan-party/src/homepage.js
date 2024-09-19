import React, { useState, useEffect, useRef } from 'react';
import { ImagePixelated } from 'react-pixelate';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import images from './utils/importAllHomepageImages';
import clickImage from './assets/homepage/buttons/click.png'
import forumImage from './assets/homepage/buttons/forum.png'
import logoGif from './assets/homepage/buttons/logo.gif'
import loading1 from './assets/homepage/loading/loadingbar1.gif';
import loading2 from './assets/homepage/loading/loadingbar2.gif';
import loading3 from './assets/homepage/loading/loadingbar3.gif';
import loading4 from './assets/homepage/loading/loadingbar4.gif';
import loading5 from './assets/homepage/loading/loadingbar5.gif';
// import loading6 from './assets/homepage/loading/loadingbar6.gif';
import roundloading from './assets/homepage/loading/roundloading2.gif';
import reboot from './assets/homepage/loading/factoryreset.jpeg';
import cursorGif from './assets/homepage/loading/cursorloading.gif';

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pixelSize, setPixelSize] = useState(0);
  const [showLoading1, setShowLoading1] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [showLoading3, setShowLoading3] = useState(false);
  const [showLoading4, setShowLoading4] = useState(false);
  const [showLoading5, setShowLoading5] = useState(false);
  const [showRoundLoading, setShowRoundLoading] = useState(false);
  const [showReboot, setShowReboot] = useState(false);
  const [showWhiteBackground, setShowWhiteBackground] = useState(false);
  const [showCustomCursor, setShowCustomCursor] = useState('');
  const cursorRef = useRef(null);
  const [rotateImages, setRotateImages] = useState(true);
  const containerRef = useRef(null);
  const pixelatedImageRef = useRef(null);

  const navigate = useNavigate();

  const navigateTo = (path) => {
      navigate(path); 
  };

  useEffect(() => {
    if (rotateImages) {
        const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [rotateImages]);

  useEffect(() => {
    function updateCanvasSize() {
        if (containerRef.current) {
            const { clientWidth, clientHeight } = containerRef.current;
            if (pixelatedImageRef.current) {
                pixelatedImageRef.current.style.width = `${clientWidth}px`;
                pixelatedImageRef.current.style.height = `${clientHeight}px`;
            }
        }
    }

    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize(); // Initial size set

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    if (rotateImages) {
        const steps = 15; // Number of steps (2 seconds / 0.5 second intervals)
        const stepSize = 50 / steps; // Pixel size increment per step

        let step = 0;

        const intervalId = setInterval(() => {
        setPixelSize(stepSize * step);
        step += 1;

        if (step > steps) {
            clearInterval(intervalId);
            setPixelSize(0); // Reset pixel size for the next image
        }
        }, 100);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [currentImageIndex, rotateImages]);

  const handleClick = () => {
    setRotateImages(false);
    setPixelSize(70);
    setShowCustomCursor(true);
    setTimeout(() => {
      setShowLoading1(true);
      setShowLoading2(true);
      setTimeout(() => {
        setShowLoading5(true);
        setShowLoading3(true);
        setShowLoading2(false);
        setTimeout(() => {
          setShowLoading4(true);
          setShowLoading5(true)
          setShowLoading1(false);
          setTimeout(() => {
            setShowLoading4(false);
            setTimeout(() => {
                setShowWhiteBackground(true);
                setShowRoundLoading(true);
                setShowLoading3(false);
                setTimeout(() => {
                    setShowReboot(true);
                    setShowRoundLoading(false);
                    setShowWhiteBackground(false);
                    setTimeout(() => {
                        setShowWhiteBackground(true);
                        setShowReboot(false);
                        setTimeout(() => {
                            setShowWhiteBackground(false);
                            setShowLoading5(false);
                            setShowCustomCursor(false);
                            setRotateImages(true);
                            navigateTo('/friendship')
                        }, 4000); // 8 seconds
                    }, 9000); // show full loading image for 18 seconds
                }, 4000); // show full loading image for 8 seconds
            }, 4000); // show third for 8 more seconds while removing second loading gif
          }, 3000); // Show third loading gif for 4.5 seconds
        }, 6000); // Show second loading gif for 12 seconds
      }, 6000); // Show first loading gif for 7 seconds
    }, 1000); // Keep pixelSize 50 for 1 seconds
  };

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    if (showCustomCursor) {
      document.addEventListener('mousemove', moveCursor);
    } else {
      document.removeEventListener('mousemove', moveCursor);
    }

    return () => document.removeEventListener('mousemove', moveCursor);
  }, [showCustomCursor]);

  
  return (
    <div className={`background ${showCustomCursor ? 'hide-default-cursor' : ''}`} ref={containerRef} style={{ backgroundColor: showWhiteBackground ? 'white' : '' , backgroundImage: showReboot ? `url(${reboot})` : ''}}>
        {!showWhiteBackground && !showReboot && (
      <ImagePixelated
        ref={pixelatedImageRef}
        src={images[currentImageIndex]}
        width={containerRef.current ? containerRef.current.clientWidth : window.innerWidth}
        height={containerRef.current ? containerRef.current.clientHeight : window.innerHeight}
        pixelSize={pixelSize}
        fillTransparencyColor={"grey"}
        style={{ objectFit: 'cover', display: 'block' }}
      />
        )}
      {!showLoading1 && !showLoading2 && !showLoading3 && !showLoading4 && !showLoading5 && !showRoundLoading && (
        <img
          src={clickImage}
          alt="Click Button"
          className="click-button"
          onClick={handleClick}
        />
      )}
      {showLoading1 && (
        <img
          src={loading1}
          alt="Loading 1"
          className="loading-gif-1"
        />
      )}
      {showLoading2 && (
        <img
          src={loading2}
          alt="Loading 2"
          className="loading-gif-2"
        />
      )}
      {showLoading3 && (
        <img
          src={loading3}
          alt="Loading 3"
          className="loading-gif-3"
        />
      )}
      {showLoading4 && (
        <img
          src={loading4}
          alt="Loading 4"
          className="loading-gif-4"
        />
      )}
       {showLoading5 && (
        <img
          src={loading5}
          alt="Loading 5"
          className="loading-gif-5"
        />
      )}
       {showRoundLoading && (
        <img
          src={roundloading}
          alt="Round loading"
          className="round-loading"
        />
      )}
      {showCustomCursor && (
        <div
          ref={cursorRef}
          className="custom-cursor"
          style={{ backgroundImage: `url(${cursorGif})` }}
        ></div>
      )}
      {!showLoading1 && !showLoading2 && !showLoading3 && !showLoading4 && !showLoading5 && !showRoundLoading && (
        <img
            src={forumImage}
            alt="Click Button"
            className="forum-button"
        />
      )}
      {!showLoading1 && !showLoading2 && !showLoading3 && !showLoading4 && !showLoading5 && !showRoundLoading && (
        <img
            src={logoGif}
            alt="Titans of Finance"
            className="logo"
        />
      )}
    </div>
  );
}

export default HomePage;
