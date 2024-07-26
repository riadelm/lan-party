import React, { useState, useEffect, useRef } from 'react';
import { ImagePixelated } from 'react-pixelate';
import './homepage.css';
import images from './utils/importAllHomepageImages';
// import image2 from './assets/homepage/lan-party-02.jpeg';

// const images = [image1, image2];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pixelSize, setPixelSize] = useState(0);
  const containerRef = useRef(null);
  const pixelatedImageRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

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
  }, [currentImageIndex]);

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
    </div>
  );
}

export default HomePage;
