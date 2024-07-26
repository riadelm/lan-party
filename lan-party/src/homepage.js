import React, { useState, useEffect, useRef } from 'react';
import { ImagePixelated } from 'react-pixelate';
import './homepage.css';
import images from './utils/importAllHomepageImages';
import clickImage from './assets/homepage/buttons/click.png'
import forumImage from './assets/homepage/buttons/forum.png'
import logoGif from './assets/homepage/buttons/logo.gif'
import loading1 from './assets/homepage/loading/loading1.gif';

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pixelSize, setPixelSize] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
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
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setRotateImages(true);
      }, 3000); // Show loading for 3 seconds
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
      {!showLoading && (
        <img
          src={clickImage}
          alt="Click Button"
          className="click-button"
          onClick={handleClick}
        />
      )}
      {showLoading && (
        <img
          src={loading1}
          alt="Loading"
          className="loading-gif"
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
