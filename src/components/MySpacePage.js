import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./MySpacePage.css";
import ImagePopUp from "./popups/myspace/imagePopUp";
import SystemPopUp from "./popups/myspace/systemPopUp";
import HomeIcon from './popups/homebtn/home';
import searchBar from "../assets/myspacepage/Myspace logo.png"
import pfp from "../assets/myspacepage/profile-pic.png"
import mood from "../assets/myspacepage/mehhh.gif"
import sendMailIcon from "../assets/myspacepage/sendMailIcon.gif"
import forwardMailIcon from "../assets/myspacepage/forwardMailIcon.gif"
import addFriendIcon from "../assets/myspacepage/addFriendIcon.gif"
import addFavoritesIcon from "../assets/myspacepage/addFavoritesIcon.gif"
import messagefriend from "../assets/myspacepage/messagefriend.gif"
import blockUser from "../assets/myspacepage/blockUser.gif"
import addToGroupIcon from "../assets/myspacepage/addToGroupIcon.gif"
import rankUserIcon from "../assets/myspacepage/rankUserIcon.gif"
import friend1 from "../assets/myspacepage/EdwardzCookiez.png"
import friend2 from "../assets/myspacepage/koalagrrl.png"
import friend3 from "../assets/myspacepage/_mae moriko_.png"
import friend4 from "../assets/myspacepage/spenser.png"
import friend5 from "../assets/myspacepage/erykah.png"
import friend6 from "../assets/myspacepage/PwencessChubby.png"
import friend7 from "../assets/myspacepage/~JUST LET IT BE~.png"
import friend8 from "../assets/myspacepage/Xspace_ninjaX.png"
import friend100 from "../assets/myspacepage/Dominik D’Ville.png"
import friend200 from "../assets/myspacepage/CirKus goThiKa.png"
import snsd from "../assets/myspacepage/snsd.webp"
import hearts from "../assets/myspacepage/hearts.gif"
import google from "../assets/myspacepage/google.gif"
import footerGif from "../assets/myspacepage/Glitter_stars.gif"
import droppingBy from "../assets/myspacepage/droppingBy.gif"
import sunglasses from "../assets/myspacepage/sunglasses.gif"
import konataIly from "../assets/myspacepage/konata-lucky-star.gif"
import popupimg1 from "../assets/myspacepage/life is too short....gif"
import popupimg2 from "../assets/myspacepage/friends are forever.png"
import popupimg3 from "../assets/myspacepage/throughout your life....png"
import popupimg4 from "../assets/myspacepage/Myspace pop up 1.png"
import popupimg5 from "../assets/myspacepage/Myspace pop up 2.gif"
import popupimg6 from "../assets/myspacepage/im the girl.jpg"
import popupimg7 from "../assets/myspacepage/love is like....gif"
import popupimg8 from "../assets/myspacepage/tupac quote.jpg"
import popupimgsys1 from "../assets/myspacepage/warning message cropped.png"
import popupimgsys2 from "../assets/myspacepage/warning message 2.png"
import popupimgsys3 from "../assets/myspacepage/warning message 1.png"
import luckyStarTheme from "../assets/audio/Lucky Star Intro (softer).mp3"
import click from '../assets/audio/click.mp3'
import basso from '../assets/audio/basso.mp3'




const MySpacePage = () => {
    const clickAudio = useRef(null);

    useEffect(() => {
    clickAudio.current = new Audio(click);
    }, []);

    const playClickSound = () => {
    clickAudio.current.currentTime = 0; // Reset to start
    clickAudio.current.play();
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

    const [showPopup, setShowPopup] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [activePopupId, setActivePopupId] = useState(null);
    const handleClick = (id) => {
        playClickSound();
        setImageUrl({pfp}); // Replace with your image URL
        setActivePopupId(id);
    };
    
    const handleClose = () => {
        setActivePopupId(null);
    };

    const navigate = useNavigate();

    const navigateTo = (path) => {
        playClickSound();
        navigate(path); 
    };

    return (
        <div className="myspace-body">
            <HomeIcon />
        <audio ref={audioRef} src={luckyStarTheme} loop />
        {/* <img className="myspace-header-img" src={searchBar}></img> */}
        <nav class="search-bar">
            {/* <form>
                <label>
                    The Web
                    <input type="radio" name="search-type" value="the-web"></input>
                </label>

                <label>
                    MySpace
                    <input type="radio" name="search-type" value="myspace"></input>
                </label>

                <label>
                    <input type="text" name="search"></input>
                </label>

                <input className="submit-btn" type="submit" name="submit-button" value="Search"></input>
            </form> */}
        </nav>
        <nav className="navbar">
            <ul>
            <li><a  onClick={() => playBassoSound()}>Home</a></li>
            <li><a  onClick={() => playBassoSound()}>Browse</a></li>
            <li><a  onClick={() => playBassoSound()}>Search</a></li>
            <li><a  onClick={() => playBassoSound()}>Invite</a></li>
            <li><a  onClick={() => playBassoSound()}>Film</a></li>
            <li><a  onClick={() => playBassoSound()}>Mail</a></li>
            <li><a  onClick={() => playBassoSound()}>Blog</a></li>
            <li><a  onClick={() => playBassoSound()}>Favorites</a></li>
            <li><a  onClick={() => playBassoSound()}>Forum</a></li>
            <li><a  onClick={() => playBassoSound()}>Groups</a></li>
            <li><a  onClick={() => playBassoSound()}>Events</a></li>
            <li><a  onClick={() => playBassoSound()}>Videos</a></li>
            <li><a  onClick={() => playBassoSound()}>Music</a></li>
            <li><a  onClick={() => playBassoSound()}>Classifieds</a></li>
            </ul>
        </nav>
            <div className="page-content-container">
            {/* PROFILE SIDE BAR */}
                <aside className="profile-sidebar">
                    <div className="profile-picture-container">
                        <h1 className="profile-name">sarah san&lt;3 (✿◠‿◠)</h1>
                        <img className="profile-pic" src={pfp} alt="LUCKYYYYYYY."></img>

                        <p className="personal-msg"><b>ヾ(☆▽☆)</b></p>

                        <ul className="gender-age">
                            <li>♫Feeling kinda lazy</li>
                            <li>Borderlinin' crazy</li>
                            <li>Wait, no, I think</li>
                            <li>maybe I love you! ♫</li>
                            <li>  `  </li>
                            <li>   `  </li>
                            <li>Female</li>
                            <li>14 yrs old</li>
                            <li>springfield, Missouri US</li>

                            <li>  <b>konata x kagami otp 4 lyfe !!!!   </b> </li>
                        </ul>

                        <ul className="last-login">
                            <li><b>Last Login:</b></li>
                            <li>4/22/2009</li>
                        </ul>

                        <p className="pics-videos">View My: <a  onClick={() => handleClick(9)}><b>Pics</b></a> | <a  onClick={() => handleClick(10)}><b>Videos</b></a></p>
                        {activePopupId === 9 && <SystemPopUp popUpTitle="Pics" imageUrl={popupimgsys1} onClose={handleClose} />}
                        {activePopupId === 10 && <SystemPopUp popUpTitle="Pics" imageUrl={popupimgsys1} onClose={handleClose} />}
                        <p className="mood"><b>Mood: meh </b><img src={mood}></img></p>
                        </div>

                        <section className="contact-box">
                        <h2>Contacting <span className="profile-name">sarah san&lt;3 (✿◠‿◠)</span></h2>

                        <figure className="contact-images" onClick={() => handleClick(11)}>
                            <img src={sendMailIcon} alt="Send Message"></img>
                            <img src={forwardMailIcon} alt="Forward to Friend"></img>
                            <img src={addFriendIcon} alt="Add to Friends"></img>
                            <img src={addFavoritesIcon} alt="Add to Favorites"></img>
                            <img src={messagefriend} alt="Instant Message"></img>
                            <img src={blockUser} alt="Block User"></img>
                            <img src={addToGroupIcon} alt="Add to Group"></img>
                            <img src={rankUserIcon} alt="Rank User"></img>
                        </figure>
                        {activePopupId === 11 && <SystemPopUp popUpTitle="Pics" imageUrl={popupimgsys3} onClose={handleClose} />}
                        </section>
                        
                        <section className="myspace-url-box">
                        <h3 className="fanfic-link"><b><a className="to-ff fanfic-link" onClick={() => navigateTo('/love')}>https://www.animeyurifanfics.net/stars-above</a></b></h3>
                        </section>

                    <section className="details">
                    <table className="sidebar-table">

                        <caption>
                        <h2 className="sidebar-table-h2"><span className="profile-name">sarah san&lt;3 (✿◠‿◠)</span>'s Details</h2>
                        </caption>

                        <tbody>
                        <tr>
                            <th className="sidebar-table-header" scope="row">Status:</th>
                            <td className="sidebar-table-data">Dating konata-chan</td>
                        </tr>

                        <tr>
                            <th className="sidebar-table-header" scope="row">Here For:</th>
                            <td className="sidebar-table-data">Friends</td>
                        </tr>

                        <tr>
                            <th className="sidebar-table-header" scope="row">Hometown:</th>
                            <td className="sidebar-table-data">Springfield</td>
                        </tr>

                        <tr>
                            <th className="sidebar-table-header" scope="row">Ethnicity:</th>
                            <td className="sidebar-table-data">White</td>
                        </tr>

                        <tr>
                            <th className="sidebar-table-header" scope="row">Orientation:</th>
                            <td className="sidebar-table-data">Bi</td>
                        </tr>

                        <tr>
                            <th className="sidebar-table-header" scope="row">Zodiac Sign:</th>
                            <td className="sidebar-table-data">Virgo 0_0</td>
                        </tr>

                        <tr>
                            <th className="sidebar-table-header" scope="row">Smoke / Drink:</th>
                            <td className="sidebar-table-data">Nopee</td>
                        </tr>

                        <tr>
                            <th className="sidebar-table-header" scope="row">Occupation:</th>
                            <td className="sidebar-table-data">9th grade</td>
                        </tr>

                        </tbody>
                    </table>
                    </section>
                </aside>

                <main>

                        <section className="user-network">
                        <header>
                            <h2><span className="profile-name">sarah san&lt;3 (✿◠‿◠)</span> is in your extended network</h2>
                        </header>
                        </section>

                        <section className="blurbs">
                            <header className="main-section-header">
                                <h2 className="main-section-h2"><span className="profile-name">sarah san&lt;3 (✿◠‿◠)</span>'s Blurbs</h2>
                            </header>

                            <h3>About me &gt;///////&lt;</h3>
                            <img className="footer-gif" src={footerGif}></img>
                            <p>haiii!! :3 my name is sarah and i guess you could DEFINITELY call me an otaku 0w0 bc i LOOOVE Lucky Star (obv) but i actually like all kinds of animes like Soul Eater, Ouran HighSchool Host Club, Lovely Complex, Chobits, Cardcaptor Sakura and soooo many more!!</p>

                            <p>I have big dreams and even though I'm nowhere near acomplishing any of them..I believe in myself enough to know I'll make them come true one day</p>

                            <p>I'm a curious kitten..<span>I <img className="google" src={google}></img> EVERYTHING!</span></p>

                            <p>i have two older brothers and a little sister who is sooo annoying!! I can’t wait to live on my own and not be bothered by anyone evarr</p>

                            <p>i am a writer and i update my fic <a className="to-ff" onClick={() => navigateTo('/love')}>STARS ABOVE</a> every wednesday on animeyurifanfics.net, its mostly kagami x konata yuri fluff but with some cross over stuff too okaiiiiiii byeee i hope you check it out ヾ(☆▽☆) ✿✿✿✿✿✿</p>

                            <h3 className="to-ff" onClick={() => navigateTo('/love')}>CHAPTER 4 COMING SOOONZ(๑´&gt;᎑&lt;)~*</h3>
                            <p>thanks soo much for the support <b className="to-ff" onClick={() => navigateTo('/love')}>I LOVE YOU ALL</b></p>
                            <img className="footer-gif" src={footerGif}></img>
                        </section>

                        <section className="blog">
                        <header><b><span className="profile-name">sarah san&lt;3 (✿◠‿◠)</span>'s Status</b></header>
                        <p>I”M SO EXCITED!!! I”M GOING TO CALI WITH MY MOM TO SEE GIRLS GENERATION!!!<img src={hearts}></img>
                        {[...Array(40)].map((x, i) => 
                            <img src={hearts}></img>
                        )}

                        </p>
                        <img className="status-pic" src={snsd} onClick={() => handleClick(12)}></img>
                        {activePopupId === 12 && <SystemPopUp popUpTitle="Pics" imageUrl={popupimgsys2} onClose={handleClose} />}
                        </section>

                        <section className="friends">
                    <header className="main-section-header">
                        <h2 className="main-section-h2"><span className="profile-name">sarah san&lt;3 (✿◠‿◠)</span>'s Friend Space</h2>
                    </header>

                    <p><b><span className="profile-name">sarah san&lt;3 (✿◠‿◠)</span> has <span className="focus-highlight">278</span> Friends.</b></p>

                    <div className="friend-pic-container">
                        <figure>
                        <figcaption><a  onClick={() => handleClick(1)}>Edwardz Cookiez</a></figcaption>
                        <img src={friend1} onClick={() => handleClick(1)}></img>
                        {activePopupId === 1 && <ImagePopUp popUpTitle="Edwardz Cookiez" imageUrl={popupimg1} onClose={handleClose} />}
                        </figure>

                        <figure>
                        <figcaption><a  onClick={() => handleClick(2)}>koalagrrl</a></figcaption>
                        <img src={friend2} onClick={() => handleClick(2)}></img>
                        {activePopupId === 2 && <ImagePopUp popUpTitle="koalagrrl" imageUrl={popupimg2} onClose={handleClose} />}
                        </figure>

                        <figure>
                        <figcaption><a  onClick={() => handleClick(3)}>*mae moriko*</a></figcaption>
                        <img src={friend3} onClick={() => handleClick(3)}></img>
                        {activePopupId === 3 && <ImagePopUp popUpTitle="*mae moriko*" imageUrl={popupimg3} onClose={handleClose} />}
                        </figure>

                        <figure>
                        <figcaption><a  onClick={() => handleClick(4)}>spenser</a></figcaption>
                        <img src={friend4} onClick={() => handleClick(4)}></img>
                        {activePopupId === 4 && <ImagePopUp popUpTitle="spenser" imageUrl={popupimg4} onClose={handleClose} />}
                        </figure>

                        <figure>
                        <figcaption><a  onClick={() => handleClick(5)}>.eyrkah.</a></figcaption>
                        <img src={friend5} onClick={() => handleClick(5)}></img>
                        {activePopupId === 5 && <ImagePopUp popUpTitle=".eyrkah." imageUrl={popupimg5} onClose={handleClose} />}
                        </figure>

                        <figure>
                        <figcaption><a  onClick={() => handleClick(6)}>Pwencess Chubby</a></figcaption>
                        <img src={friend6} onClick={() => handleClick(6)}></img>
                        {activePopupId === 6 && <ImagePopUp popUpTitle="Pwencess Chubby" imageUrl={popupimg6} onClose={handleClose} />}
                        </figure>

                        <figure>
                        <figcaption><a  onClick={() => handleClick(7)}>~JUST LET IT BE~</a></figcaption>
                        <img src={friend7} onClick={() => handleClick(7)}></img>
                        {activePopupId === 7 && <ImagePopUp popUpTitle="~JUST LET IT BE~" imageUrl={popupimg7} onClose={handleClose} />}
                        </figure>

                        <figure>
                        <figcaption><a  onClick={() => handleClick(8)}>Xspace_ninjaX</a></figcaption>
                        <img src={friend8} onClick={() => handleClick(8)}></img>
                        {activePopupId === 8 &&<ImagePopUp popUpTitle="Xspace_ninjaX" imageUrl={popupimg8} onClose={handleClose} />}
                        </figure>
                    </div>

                    <p className="friends-list-link"><a onClick={() => playBassoSound()}>View All of <span className="profile-name">sarah san&lt;3 (✿◠‿◠)</span>'s Friends</a></p>
                    </section>

                    <section className="comment-wall">
                        <header className="main-section-header">
                            <h2 className="main-section-h2"><span className="profile-name">sarah san&lt;3 (✿◠‿◠)</span>'s Friends Comments</h2>
                        </header>

                        <p id="comment-counter"><b>Displaying <span className="focus-highlight">10</span> of <span className="focus-highlight">3092</span> comments (<a  onClick={() => playBassoSound()}>View/Edit All Comments</a>)</b></p>

                        <table>
                            <tr>
                            <th scope="row" onClick={() => handleClick(8)}>
                                <figure>
                                <figcaption><a >Xspace_ninjaX</a></figcaption>
                                <img className="comment-pfp" src={friend8}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/21/2009 6:54 PM</h3>
                                <p>2 legit 2 quit <img src={sunglasses}></img>
                                    <img className="comment-img" src={droppingBy}></img>
                                </p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(1)}>
                                <figure>
                                <figcaption><a >Edwardz Cookiez</a></figcaption>
                                <img className="comment-pfp" src={friend1}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/20/2009 7:32 PM</h3>
                                <p>omggg whens da new update !!!! &gt;:( i want them 2 kiss soooo badd!!!!! </p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(1)}>
                                <figure>
                                <figcaption><a >Edwardz Cookiez</a></figcaption>
                                <img className="comment-pfp" src={friend1}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/20/2009 7:31 PM</h3>
                                <p>okii IM me when ur done skool i wnna know</p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(3)}>
                                <figure>
                                <figcaption><a >*mae moriko*</a></figcaption>
                                <img className="comment-pfp" src={friend3}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/20/2009 6:17 PM</h3>
                                <p>they make me squeeee <img className="comment-img" src={konataIly}></img></p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(2)}>
                                <figure>
                                <figcaption><a >koalagrrl</a></figcaption>
                                <img className="comment-pfp" src={friend2}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/19/2009 5:55 PM</h3>
                                <p> yayyyyy no one at my school watches anime or reads manga i’m so happy to finally make frendz on here who luv what i luv &lt;333</p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(1)}>
                                <figure>
                                <figcaption><a >Edwardz Cookiez</a></figcaption>
                                <img className="comment-pfp" src={friend1}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/18/2009 9:08 PM</h3>
                                <p>dont listen to him :P hes just some rando what does he kno about fanfic??? like srsly if u dont like it just stop reading XD</p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(7)}>
                                <figure>
                                <figcaption><a >CirKus goThiKa</a></figcaption>
                                <img className="comment-pfp" src={friend200}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/18/2009 1:12 AM</h3>
                                <p>Hey, its going great thanks for checking out our myspace. We should have our demo up soon ,as we are in the process of trying to record, keep checking for upcoming shows!!!</p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(8)}>
                                <figure>
                                <figcaption><a >Xspace_ninjaX</a></figcaption>
                                <img className="comment-pfp" src={friend8}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/16/2009 7:14 PM</h3>
                                <p>i miss you this&lt;------------------------------------------------------------------------&gt; much!<br></br>
                                (thats a lot)
                                </p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(1)}>
                                <figure>
                                <figcaption><a >Edwardz Cookiez</a></figcaption>
                                <img className="comment-pfp" src={friend1}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/15/2009 10:40 AM</h3>
                                <p> i took my practical exam 2day! so easyyyy</p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(8)}>
                                <figure>
                                <figcaption><a >Dominik D'Ville</a></figcaption>
                                <img className="comment-pfp" src={friend100}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/13/2009 11:07 AM</h3>
                                <p> hey imma have a party on the 20th of next month for my bday in oak grove i really want u to come but ill let u know more wen it comes round...k</p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(4)}>
                                <figure>
                                <figcaption><a >spenser</a></figcaption>
                                <img className="comment-pfp" src={friend4}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/13/2009 1:07 AM</h3>
                                <p>comment4comment</p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(6)}>
                                <figure>
                                <figcaption><a >Pwencess Chubby</a></figcaption>
                                <img className="comment-pfp" src={friend6}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/12/2009 2:29 PM</h3>
                                <p>thank you for the picture comments guuuuuuuuuuurrrlll. how you doin'? Say hi to ur mom 4 me! 
    </p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(5)}>
                                <figure>
                                <figcaption><a >.erykah.</a></figcaption>
                                <img className="comment-pfp" src={friend5}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/11/2009 5:37 PM</h3>
                                <p>i meaannn yui and konata r probably str8 in the show XD buttttt ur writing is rlly good so fuck da haterz^^ </p>
                            </td>
                            </tr>

                            <tr>
                            <th scope="row" onClick={() => handleClick(7)}>
                                <figure>
                                <figcaption><a >~JUST LET IT BE~</a></figcaption>
                                <img className="comment-pfp" src={friend7}></img>
                                </figure>
                            </th>
                            <td>
                                <h3>4/10/2009 4:22 PM</h3>
                                <p>  I just gave you a sticker for your profile.<br></br>
                                <a onClick={() => navigateTo('/love')} className="comment-link" >I love your fic btw ~~</a>           
                                </p>
                            </td>
                            </tr>
                        </table>

                        <p id="add-comment"><a className="to-ff" onClick={() => navigateTo('/love')}>Add Comment</a></p>

                        </section>

                </main>
            </div>
            <footer className="footer">

            <nav>
            <ul onClick={() => playBassoSound()}>
                <li><a >About</a></li>
                <li><a >FAQ</a></li>
                <li><a >Terms</a></li>
                <li><a >Privacy</a></li>
                <li><a >Safety Tips</a></li>
                <li><a >Contact Myspace</a></li>
                <li><a >Report Inappropriate Content</a></li>
                <li><a >Promote!</a></li>
                <li><a >Advertise</a></li>
                <li id="last"><a >MySpace International</a></li>
            </ul>
            </nav>

            <small>©2003-2006 MySpace.com. All Rights Reserved.</small>
            </footer>
    </div>
    );
};

export default MySpacePage;