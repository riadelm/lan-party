import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./webcam.css"
import LoadingScreen from "../../popups/loading/loading"
import loadingGif from "../../../assets/homepage/loading/loadingbar1.gif"

const WebcamPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const videoRef = useRef(null);

  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);

  const navigateTo = (path) => {
      setShowLoading(true); // Show the loading screen

      // Wait 2 seconds, hide loading, and then navigate
      setTimeout(() => {
          setShowLoading(false); // Hide loading screen
          navigate(path);        // Navigate to the target path
      }, 15000);
  };


  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
      enableWebcam();
    }, 2000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
      closePopup();
      navigateTo('/identity');
    }, 12000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const enableWebcam = () => {
    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          let video = videoRef.current;
          if (video) {
            video.srcObject = stream; // Attach the stream to the video element
            video.play(); // Play the video
          }
        })
        .catch((err) => {
          console.error("Error accessing the webcam: ", err);
        });
    } else {
      console.error("getUserMedia is not supported in this browser");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    let video = videoRef.current;
    if (video && video.srcObject) {
        let stream = video.srcObject;
        let tracks = stream.getTracks(); // Get all tracks from the stream (both video and audio if applicable)

        tracks.forEach((track) => {
        track.stop(); // Stop each track to fully release the webcam
        });

        video.srcObject = null; // Remove the stream from the video element
    }
  };

  

  return (
    <div>
    {showLoading && <LoadingScreen
        color= "black"
        loadingGif={loadingGif}
        width= "10vw"
        />}
      {showPopup && (
      <div className="wc-popup">
         <div className="wc-popup-header">
                <h3 className="popup-title">IS THIS YOU?</h3>
                <button className="close-button" >X</button>
         </div>
           <video ref={videoRef} className="video" />
         <div className="popup-footer">
            <button className="footer-button" >OK</button>
            <button className="footer-button" >Cancel</button>
        </div>
       </div>
      )}
    </div>
  );
};

export default WebcamPopup;
