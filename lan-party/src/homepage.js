import React, { useState, useEffect, useRef } from 'react';
import { ImagePixelated } from 'react-pixelate';
import './homepage.css';
import images from './utils/importAllHomepageImages';
import clickImage from './assets/homepage/buttons/click.png'
import forumImage from './assets/homepage/buttons/forum.png'
import logoGif from './assets/homepage/buttons/logo.gif'
import loading1 from './assets/homepage/loading/loadingbar1.gif';
import loading2 from './assets/homepage/loading/loadingbar2.gif';
import loading3 from './assets/homepage/loading/loadingbar3.gif';
import loading4 from './assets/homepage/loading/loadingbarfinal.gif';

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pixelSize, setPixelSize] = useState(0);
  const [showLoading1, setShowLoading1] = useState(false);
  const [showLoading2, setShowLoading2] = useState(false);
  const [showLoading3, setShowLoading3] = useState(false);
  const [showLoading4, setShowLoading4] = useState(false);
  const [rotateImages, setRotateImages] = useState(true);
  const containerRef = useRef(null);
  const pixelatedImageRef = useRef(null);

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
    setPixelSize(50);
    setTimeout(() => {
      setShowLoading1(true);
      setTimeout(() => {
        setShowLoading2(true);
        setTimeout(() => {
          setShowLoading3(true);
          setShowLoading1(false);
          setTimeout(() => {
            setShowLoading2(false);
            setTimeout(() => {
                setShowLoading3(false);
                setShowLoading4(true);
                setTimeout(() => {
                    setShowLoading4(false);
                    setRotateImages(true);
                }, 5000); // show full loading image for 5 seconds
            }, 3000); // show third for 3 more seconds while removing second loading gif
          }, 7000); // Show third loading gif for 7 seconds
        }, 6000); // Show second loading gif for 6 seconds
      }, 3000); // Show first loading gif for 3 seconds
    }, 2000); // Keep pixelSize 50 for 2 seconds
  };
  return (
    <div className="background">
      <ImagePixelated
        ref={pixelatedImageRef}
        src={images[currentImageIndex]}
        width={containerRef.current ? containerRef.current.clientWidth : window.innerWidth}
        height={containerRef.current ? containerRef.current.clientHeight : window.innerHeight}
        pixelSize={pixelSize}
        fillTransparencyColor={"grey"}
        style={{ objectFit: 'cover', display: 'block' }}
      />
      {!showLoading1 && !showLoading2 && !showLoading3 && !showLoading4 &&(
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
      <img
        src={forumImage}
        alt="Click Button"
        className="forum-button"
      />
      <img
        src={logoGif}
        alt="Titans of Finance"
        className="logo"
      />
    </div>
  );
}

export default HomePage;
