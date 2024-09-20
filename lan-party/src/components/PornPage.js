import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PornPage.css";
import LoadingScreen from "./popups/loading/loading"
import ScrollingText from './popups/sex/text';
import ImagePopUp from "./popups/sex/imagePopUp"
import WebcamPopup from "./popups/sex/webcam"
import logo from "../assets/sex/logo2.png"
import sidegif1 from "../assets/sex/Porn Ads/Porn Ad 8.gif"
import sidegif2 from "../assets/sex/Porn Ads/Porn Ad 7.gif"
import sidegif3 from "../assets/sex/Porn Ads/Porn Ad 6.gif"
import sidegif4 from "../assets/sex/Porn Ads/Porn Ad 4.gif"
import sidegif5 from "../assets/sex/Porn Ads/Porn Ad 5.gif"
import sidegif6 from "../assets/sex/Porn Ads/Porn Ad 1.gif"
import sidegif7 from "../assets/sex/Porn Ads/Porn Ad 2.gif"
import sidegif8 from "../assets/sex/Porn Ads/Porn Ad 3.gif"
import tn1 from "../assets/sex/TM 1.gif"
import tn2 from "../assets/sex/TM 2.gif"
import tn3 from "../assets/sex/TM 3.gif"
import tn4 from "../assets/sex/TM 4.gif"
import tn5 from "../assets/sex/TM 5.gif"
import tn6 from "../assets/sex/TM 6.gif"
import tn7 from "../assets/sex/TM 7.gif"
import tn8 from "../assets/sex/TM 8.gif"
import tn9 from "../assets/sex/TM 9.gif"
import tn10 from "../assets/sex/TM 10.gif"
import tn11 from "../assets/sex/TM 11.gif"
import tn12 from "../assets/sex/TM 12.gif"
import tn13 from "../assets/sex/TM 13.gif"
import tn14 from "../assets/sex/TM 14 .gif"
import tn15 from "../assets/sex/TM 15.gif"
import tn16 from "../assets/sex/TM 16.gif"
import tn17 from "../assets/sex/TM 17.gif"
import tn18 from "../assets/sex/TM 18gif.gif"
import tn19 from "../assets/sex/TM 19.gif"
import tn20 from "../assets/sex/TM 20.gif"
import tn21 from "../assets/sex/TM 21.gif"
import tn22 from "../assets/sex/TM 22gif.gif"
import tn23 from "../assets/sex/TM 23.gif"
import tn24 from "../assets/sex/TM 24gif.gif"
import tn25 from "../assets/sex/TM 25.gif"
import tn26 from "../assets/sex/TM 26.gif"
import tn27 from "../assets/sex/TM 27.gif"
import tn28 from "../assets/sex/TM 28.gif"
import tn29 from "../assets/sex/TM 29.gif"
import tn30 from "../assets/sex/TM 30.gif"
import dn1 from "../assets/sex/Dancers/dancers 1.gif"
import dn2 from "../assets/sex/Dancers/dancers 2.gif"
import dn3 from "../assets/sex/Dancers/dancers 3.gif"
import dn4 from "../assets/sex/Dancers/dancers 4.gif"
import dn5 from "../assets/sex/Dancers/dancers 5.gif"
import virus from "../assets/sex/Porn Virus 2.gif"

import loadingGif from "../assets/homepage/loading/loadingbar1.gif"
import dm from "../assets/sex/DM.gif"
import tn31 from "../assets/sex/TM 31.gif"
import banner1 from "../assets/sex/porn_banner.gif"


const PornPage = () => {
    useEffect(() => {
        // Scroll to top of the page when component is mounted
        window.scrollTo(0, 0);
    }, []);
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


    const gifArray = [dn1, dn2, dn3, dn4, dn5];

    // State to hold the current GIF index
    const [currentGifIndex, setCurrentGifIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isFading, setIsFading] = useState(false);  // Track fade state
    const [activePopupId, setActivePopupId] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [showWebcam, setShowWebcam] = useState(false);

    const handlePopupClick = (id) => {
        setImageUrl({virus}); // Replace with your image URL
        setActivePopupId(id);
    };
    
    const handlePopupClose = () => {
        setActivePopupId(null);
    };

    const handleDMClick = () => {
        setShowWebcam(true);
        setShowDM(false);
    }

    const [showDM, setShowDM] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowDM(true);
        }, 10000); // 10 seconds
    
        // Cleanup the timer if the component is unmounted
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        const gifTimer = setInterval(() => {
            if (!isPaused) {
                setIsFading(true);  // Start fading out

                setTimeout(() => {
                    // Once faded out, change the GIF
                    setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifArray.length);
                    setIsFading(false);  // Remove fade state (fade in next GIF)
                    setIsPaused(true);   // Pause for 4 seconds
                }, 2000);  // Fade out duration (2 seconds)

                setTimeout(() => {
                    setIsPaused(false);  // Resume after the pause
                }, 6000);  // 4 seconds pause (GIF stays visible before fading out)
            }
        }, 8000);  // Total time (6 seconds GIF visible, 2 seconds fading out)

        // Cleanup interval on unmount
        return () => clearInterval(gifTimer);
    }, [isPaused]);

    const tnRight = [
        {
            imgSrc: tn1,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn2,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn3,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn4,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn5,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn6,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn7,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn8,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn9,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn28,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        }
        
    ]

    const tnLeft = [
        {
            imgSrc: tn15,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn12,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn13,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn14,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn11,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn16,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn17,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn18,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn19,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn20,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        }
    ]

    const tnMiddle = [
        {
            imgSrc: tn29,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn22,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn23,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn24,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn25,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn26,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn27,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn10,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn21,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        },
        {
            imgSrc: tn30,
            title: "DIRTY neophyte gets DESTROYED in GANG-BANG"
        }
    ]

    return (
        <div className="porn-container">
            {showWebcam && <WebcamPopup />}
             {showDM && 
             <div className='dm-container'>
                <img src={dm} className="dm" onClick={() => handleDMClick()}/>
             </div>
             }
            <ScrollingText />
           <div className="prn-sidebar sb-left">
                {/* Left Sidebar Content */}
                <img className='side-gif sg-left' src={sidegif1}></img>
                <img className='side-gif sg-left' src={sidegif2}></img>
                <img className='side-gif sg-left' src={sidegif3}></img>
                <img className='side-gif sg-left' src={sidegif4}></img>
            </div>
            <div className="prn-main-content">
                {/* Main Content */}
                <div className="prn-logo">
                    <img src={logo}></img>
                    <h1>are you ready to perform?</h1>
                </div>
                <div className="content-columns">
                    <div className="column left-column">
                    {tnLeft.map((data, index) => (
                        <div className="thumbnail-container">
                            <img className="thumbnail-pic" src={data.imgSrc}></img>
                            <h1>{data.title}</h1>
                        </div>
                    ))}
                    </div>
                    <div className="column middle-column">
                        {/* Middle Column Content */}
                        {tnMiddle.map((data, index) => (
                        <div className="thumbnail-container">
                            <img className="thumbnail-pic" src={data.imgSrc}></img>
                            <h1>{data.title}</h1>
                        </div>
                     ))}
                      <div className="prn-pagination-bar">
                    <button 
                    className="prn-pagination-button"
                    onClick={() => navigateTo('/death')}
                    >
                        Previous &lt;&lt;
                    </button>

                    {/* Display current page numbers */}
                    <span className="prn-pagination-pages">
                    <span className="prn-pagination-number"onClick={() => navigateTo('/suicide')}>[1]</span>
                    <span className="prn-pagination-dots" onClick={() => navigateTo('/suicide')}>....</span>
                    <span className="prn-pagination-number" onClick={() => navigateTo('/identity')}>[6392]</span>
                    </span>

                    <button 
                    className="prn-pagination-button"
                    onClick={() => navigateTo('/identity')}
                    >
                        Next &gt;&gt;
                    </button>
                </div>
                    </div>
                    <div className="column right-column">
                        {/* Right Column Content */}
                        {tnRight.map((data, index) => (
                        <div className="thumbnail-container">
                            <img className="thumbnail-pic" src={data.imgSrc}></img>
                            <h1>{data.title}</h1>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="prn-sidebar sb-right">
                {/* Right Sidebar Content */}
                <img className='side-gif sg-right' src={sidegif5}></img>
                <img className='side-gif sg-right' src={sidegif6}></img>
                <img className='side-gif sg-right' src={sidegif7}></img>
                <img className='side-gif sg-right' src={sidegif8}></img>
            </div>
            <div className='dancer' onClick={() => handlePopupClick(1)}>
            {!isPaused && <img src={gifArray[currentGifIndex]} alt="Dancing GIF"
              className={`full-screen-gif ${isFading ? 'fade-out' : 'fade-in'}`} />}
            </div>
            {activePopupId === 1 && <ImagePopUp popUpTitle="!! PORN VIRUS !!" imageUrl={virus} onClose={handlePopupClose} />}
            {/* <div className='banner'>
                <img className="banner1" src={banner1}></img>
            </div> */}
        </div>
    );
};
    
export default PornPage;