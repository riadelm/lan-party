import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PornPage.css";
import HomeIcon from './popups/homebtn/home';
import ScrollingText from './popups/sex/text';
import WebcamPopup from "./popups/sex/webcam"
import sound from "../assets/audio/Porn Page Audio.mp3"
import logo from "../assets/sex/logo2.png"
import sidegif1 from "../assets/sex/Porn Ads/Porn Ad 8.gif"
import sidegif2 from "../assets/sex/Porn Ads/Porn Ad 7.gif"
import sidegif3 from "../assets/sex/Porn Ads/Porn Ad 6.gif"
import sidegif4 from "../assets/sex/Porn Ads/Porn Ad 4.gif"
import sidegif5 from "../assets/sex/Porn Ads/Porn Ad 5.gif"
import sidegif6 from "../assets/sex/Porn Ads/Porn Ad 1.gif"
import sidegif7 from "../assets/sex/Porn Ads/Porn Ad 2.gif"
import sidegif8 from "../assets/sex/Porn Ads/Porn Ad 3.gif"
import tn1 from "../assets/sex/1 TM.gif"
import tn2 from "../assets/sex/2 TM.gif"
import tn3 from "../assets/sex/3 TM.gif"
import tn4 from "../assets/sex/4 TM.gif"
import tn5 from "../assets/sex/5 TM.gif"
import tn6 from "../assets/sex/6 TM.gif"
import tn7 from "../assets/sex/7 TM.gif"
import tn8 from "../assets/sex/8 TM.gif"
import tn9 from "../assets/sex/9 TM.gif"
import tn10 from "../assets/sex/10 TM.gif"
import tn11 from "../assets/sex/11 TM.gif"
import tn12 from "../assets/sex/12 TM.gif"
import tn13 from "../assets/sex/13 TM.gif"
import tn14 from "../assets/sex/14 TM.gif"
import tn15 from "../assets/sex/15 TM.gif"
import tn16 from "../assets/sex/16 TM.gif"
import tn17 from "../assets/sex/17 TM.gif"
import tn18 from "../assets/sex/18 TM.gif"
import tn19 from "../assets/sex/19 TM.gif"
import tn20 from "../assets/sex/20 TM.gif"
import tn21 from "../assets/sex/21 TM.gif"
import tn22 from "../assets/sex/22 TM.gif"
import tn23 from "../assets/sex/23 TM.gif"
import tn24 from "../assets/sex/24 TM.gif"
import tn25 from "../assets/sex/25 TM.gif"
import tn26 from "../assets/sex/26 TM.gif"
import tn27 from "../assets/sex/27 TM.gif"
import tn28 from "../assets/sex/28 TM.gif"
import tn29 from "../assets/sex/29 TM.gif"
import tn30 from "../assets/sex/30 TM.gif"
import dn1 from "../assets/sex/Dancers/dancers 1.gif"
import dn2 from "../assets/sex/Dancers/dancers 2.gif"
import dn3 from "../assets/sex/Dancers/dancers 3.gif"
import dn4 from "../assets/sex/Dancers/dancers 4.gif"
import dn5 from "../assets/sex/Dancers/dancers 5.gif"
import dm from "../assets/sex/DM.gif"
import click from '../assets/audio/click.mp3'
import basso from '../assets/audio/basso.mp3'
import dmsound from '../assets/audio/FaceBook DM Noise.mp3'


const preloadAudio = (src) => {
    const audio = new Audio();
    audio.src = src;
  };
  
  const preloadAllAudio = () => {
    preloadAudio(sound); // Preload all audio files here
  };

  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
    };

const assets = [
    sidegif1, sidegif2, sidegif3, sidegif4, sidegif5, sidegif6, sidegif7, sidegif8,
    tn1, tn2, tn3, tn4, tn5, tn6, tn7, tn8, tn9, tn10, tn11, tn12, tn13, tn14, tn15,
    tn16, tn17, tn18, tn19, tn20, tn21, tn22, tn23, tn24, tn25, tn26, tn27, tn28, tn29, tn30,
    dn1, dn2, dn3, dn4, dn5
    ];

  const preloadAllImages = () => {
    assets.forEach(preloadImage);
    };

const PornPage = () => {

    useEffect(() => {
        preloadAllImages();
      }, []);

    useEffect(() => {
        preloadAllAudio();
      }, []);

    const clickAudio = useRef(null);

    useEffect(() => {
    clickAudio.current = new Audio(click);
    }, []);

    const playClickSound = () => {
    clickAudio.current.currentTime = 0; // Reset to start
    clickAudio.current.play();
    };

    const DMAudio = useRef(null);

    useEffect(() => {
        DMAudio.current = new Audio(dmsound);
    }, []);

    const playDMSound = () => {
        DMAudio.current.currentTime = 0; // Reset to start
        DMAudio.current.play();
    };

    const bassoAudio = useRef(null);

    useEffect(() => {
        bassoAudio.current = new Audio(basso);
    }, []);

    const playBassoSound = () => {
        bassoAudio.current.currentTime = 0; // Reset to start
        bassoAudio.current.play();
    };


    const audioRef = useRef(null);

    useEffect(() => {
      const audio = audioRef.current;
      // Start playing the audio muted (this is allowed by browsers)
      if (audio) {
        audio.muted = true;
        audio.play()
          .then(() => {
            // After it starts playing, unmute the audio
            audio.muted = false;
          })
          .catch((error) => {
            console.error('Autoplay blocked:', error);
          });
          }
      }, []);

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

    const handleDMClick = () => {
        playClickSound();
        setShowWebcam(true);
        setShowDM(false);
    }

    const [showDM, setShowDM] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          playDMSound();
          setShowDM(true);
        }, 50000); // 10 seconds
    
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
            title: "Blindfolded Surprise SHE DIDN’T SEE IT COMING - BDSM Torture Play"
        },
        {
            imgSrc: tn4,
            title: "Two TEENY Latinas Striptease"
        },
        {
            imgSrc: tn7,
            title: "Self-Sucking"
        },
        {
            imgSrc: tn10,
            title: "Two TEENY Latinas Striptease"
        },
        {
            imgSrc: tn13,
            title: "WTF Why R U Naked?"
        },
        {
            imgSrc: tn16,
            title: "Goth Dominatrix Punishment - LESBO BDSM"
        },
        {
            imgSrc: tn19,
            title: "Asian Nurse Cosplay Fucked HARD on couch"
        },
        {
            imgSrc: tn22,
            title: "Dom milks submissive twink - PUNISHED"
        },
        {
            imgSrc: tn25,
            title: "He CAN’T stop moaning! - Power Fucked in my SISTERS ROOM"
        },
        {
            imgSrc: tn28,
            title: "Horny Emo Twinks Brothers"
        }
        
    ]

    const tnLeft = [
        {
            imgSrc: tn2,
            title: "Tatted - Jules Jordan DEEPTHROAT"
        },
        {
            imgSrc: tn5,
            title: "making myself cum without hands"
        },
        {
            imgSrc: tn8,
            title: "Total Anal Kama Sutra"
        },
        {
            imgSrc: tn11,
            title: "Total SUBMISSION - Blonde Slut PUNISHED"
        },
        {
            imgSrc: tn14,
            title: "Fucked By My Physical Therapist???!"
        },
        {
            imgSrc: tn17,
            title: "fucking myself with a cucumber til I CUM"
        },
        {
            imgSrc: tn20,
            title: "Oiled Up Natural TITS titty-fucking till I cum"
        },
        {
            imgSrc: tn23,
            title: "Redhead’s Pussy DESTROYED - Hardcore fingering"
        },
        {
            imgSrc: tn26,
            title: "Student rails Horny Teacher"
        },
        {
            imgSrc: tn29,
            title: "Sexy Tatted Alternative Chicks Want To Pleasure You - 5 Way Action "
        }
    ]

    const tnMiddle = [
        {
            imgSrc: tn3,
            title: "Chained Up Slave BEGS to CUM"
        },
        {
            imgSrc: tn6,
            title: "UNCENSORED busty hentai maid gets fucked"
        },
        {
            imgSrc: tn9,
            title: "Dutch hooker face-rides"
        },
        {
            imgSrc: tn12,
            title: "Dirty Old Man Pleasures Himself"
        },
        {
            imgSrc: tn15,
            title: "Twink destroyed By German Soldiers"
        },
        {
            imgSrc: tn18,
            title: "Old MILF pleasures herself in public"
        },
        {
            imgSrc: tn21,
            title: "Teeny Blonde Power Fucked by StepDad"
        },
        {
            imgSrc: tn24,
            title: "Horny Pussy Gets A HUGE Load of Cum on her Clit "
        },
        {
            imgSrc: tn27,
            title: "Sexy BIG TITS latina Sucks You Dry"
        },
        {
            imgSrc: tn30,
            title: "Morning Quickie with my Sexy College fuck buddy"
        }
    ]

    return (
        <div className="porn-container">
            <HomeIcon />
             <audio ref={audioRef} src={sound} loop />
            {showWebcam && <WebcamPopup />}
             {showDM && 
             <div className='dm-container'>
                <img src={dm} className="dm" onClick={() => handleDMClick()}/>
             </div>
             }
            <ScrollingText />
           <div className="prn-sidebar sb-left">
                {/* Left Sidebar Content */}
                <img className='side-gif sg-left' src={sidegif1} onClick={() => playBassoSound()}></img>
                <img className='side-gif sg-left' src={sidegif2} onClick={() => playBassoSound()}></img>
                <img className='side-gif sg-left' src={sidegif3} onClick={() => playBassoSound()}></img>
                <img className='side-gif sg-left' src={sidegif4} onClick={() => playBassoSound()}></img>
            </div>
            <div className="prn-main-content">
                {/* Main Content */}
                <div className="prn-logo">
                    <img src={logo} onClick={() => playBassoSound()}></img>
                    <h1 onClick={() => playBassoSound()}>Thank you for joining the community!</h1>
                </div>
                <div className="content-columns">
                    <div className="column left-column">
                    {tnLeft.map((data, index) => (
                        <div className="thumbnail-container">
                            <img className="thumbnail-pic" src={data.imgSrc} onClick={() => playBassoSound()}></img>
                            <h1>{data.title}</h1>
                        </div>
                    ))}
                    </div>
                    <div className="column middle-column">
                        {/* Middle Column Content */}
                        {tnMiddle.map((data, index) => (
                        <div className="thumbnail-container">
                            <img className="thumbnail-pic" src={data.imgSrc} onClick={() => playBassoSound()}></img>
                            <h1>{data.title}</h1>
                        </div>
                     ))}
                      <div className="prn-pagination-bar">
                    <button 
                    className="prn-pagination-button"
                    onClick={() => playBassoSound()}
                    >
                        Previous &lt;&lt;
                    </button>

                    {/* Display current page numbers */}
                    <span className="prn-pagination-pages">
                    <span className="prn-pagination-number" onClick={() => playBassoSound()}>[1]</span>
                    <span className="prn-pagination-dots" onClick={() => playBassoSound()}>....</span>
                    <span className="prn-pagination-number" onClick={() => playBassoSound()}>[6392]</span>
                    </span>

                    <button 
                    className="prn-pagination-button"
                    onClick={() => playBassoSound()}
                    >
                        Next &gt;&gt;
                    </button>
                </div>
                    </div>
                    <div className="column right-column">
                        {/* Right Column Content */}
                        {tnRight.map((data, index) => (
                        <div className="thumbnail-container">
                            <img className="thumbnail-pic" src={data.imgSrc} onClick={() => playBassoSound()}></img>
                            <h1>{data.title}</h1>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="prn-sidebar sb-right">
                {/* Right Sidebar Content */}
                <img className='side-gif sg-right' src={sidegif5} onClick={() => playBassoSound()}></img>
                <img className='side-gif sg-right' src={sidegif6} onClick={() => playBassoSound()}></img>
                <img className='side-gif sg-right' src={sidegif7} onClick={() => playBassoSound()}></img>
                <img className='side-gif sg-right' src={sidegif8} onClick={() => playBassoSound()}></img>
            </div>
            <div className='dancer' onClick={() => playBassoSound()}>
            {!isPaused && <img src={gifArray[currentGifIndex]} alt="Dancing GIF" onClick={() => playBassoSound()}
              className={`full-screen-gif ${isFading ? 'fade-out' : 'fade-in'}`} />}
            </div>
            {/* <div className='banner'>
                <img className="banner1" src={banner1}></img>
            </div> */}
        </div>
    );
};
    
export default PornPage;