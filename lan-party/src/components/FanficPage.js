import React, { useState } from 'react';
import "./FanficPage.css";
import home from "../assets/fanficpage/Home Icon.png";
import fanfics from "../assets/fanficpage/Book Icon.png";
import buttonBg from "../assets/fanficpage/button_bg.png";
import users from "../assets/fanficpage/Users Icon.png";
import hdrLeftBg from "../assets/fanficpage/hdr_left_bg.png";
import headerBg from "../assets/fanficpage/header_bg.png";
import popular from "../assets/fanficpage/Star Icon.png";
import social from "../assets/fanficpage/Messages Icon.png";
import pencil from "../assets/fanficpage/pencil_icon.png";
import topHeaderBg from "../assets/fanficpage/top_rt_header_bg.png";
import logo from "../assets/fanficpage/Fanfic logo 3.png";
import ffpfp1 from "../assets/fanficpage/Ficpfp 1.2.png";
import ffpfp2 from "../assets/fanficpage/Ficpfp 2.png";
import ffpfp3 from "../assets/fanficpage/Ficpfp 3.png";
import ffpfp4 from "../assets/fanficpage/Ficpfp 4.png";
import navpopup1 from "../assets/fanficpage/Pop up 1.2.png";
import navpopup2 from "../assets/fanficpage/Pop Up 2.png";
import navpopup3 from "../assets/fanficpage/Pop Up 3.2.png";
import navpopup4 from "../assets/fanficpage/Pop Up 4.png";
import navpopup5 from "../assets/fanficpage/Pop Up 5.png";
import headerPic from "../assets/fanficpage/headerpic.png";
import chapterPic from "../assets/fanficpage/yuri.png";


const FanficPage = () => {

    const [isVisible, setIsVisible] = useState([false, false, false, false]);
    const [visibleBubble, setVisibleBubble] = useState(null);

    const handleClick = (index) => {
        // Show the bubble for the clicked <li> element
        setVisibleBubble(index);

        // Hide the bubble after 3 seconds
        setTimeout(() => {
        setVisibleBubble(null);
        }, 5000);
    };
    
    const toggleVisibility = (index) => {
        setIsVisible((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
        });
    };
      
        const tableData = [
          {
            imgSrc: ffpfp1,
            username: 'd00mkitt3n',
            title: 'The Cost of Immortality',
            description: 'Sebastien lures Ciel into a world of darkness, but Ciel can’t help help but be attracted to the mysterious Lady pulling him away from innocence…(Black Butler genderswap AU)',
            tags: 'Romance/Smut - Chapters 3 - Words 1,259 - Reviews 4 - Favs 0 - Published December 2008'
          },
          {
            imgSrc: ffpfp2,
            username: 'angelofsinz08',
            title: 'Hugging the Ghosts Goodnight',
            description: 'Tsubaki will soon learn that once the veil is lifted, the shadows beneath are all too real (Soul Eater x Lucky Star)',
            tags: 'Romance/Drama - Chapters 5 - Words 2,340 - Reviews 6 - Favs 10 - Published March 2008'
          },
          {
            imgSrc: ffpfp3,
            username: 'sweeetysy',
            title: 'blood, spit, and tears',
            description: "Something happened that changed her world. Something irreversible. This journey will push her to her limits, and she won't return the same. NOT AN OC!!! The rating is for YURI and some swearwords.",
            tags: 'Smut/Yuri/Romance - Chapters 1 - Words 546 - Reviews 0 - Favs 0 - Published September 2007'
          },
          {
            imgSrc: ffpfp4,
            username: 'Roze Potter',
            title: 'Kagome’s Demise',
            description: 'Advance Warning: What comes next contains graphic violence, death, sexual content, and other adult themes. (Inuyasha)',
            tags: 'Drama/Crime/Smut/Romance - Chapters 8 - Words 11,234 - Reviews 23 - Favs 14 - Published January 2006'
          },
        ];      

        const navItems = [
            { id: 'home-btn', href: '#', title: 'Home', imgSrc: home, bubbleImg: navpopup1 },
            { id: 'fanfics', href: '#', title: 'Fanfics', imgSrc: fanfics, bubbleImg: navpopup2 },
            { id: 'popular', href: '#', title: 'Popular', imgSrc: popular, bubbleImg: navpopup3 },
            { id: 'users', href: '#', title: 'Users', imgSrc: users, bubbleImg: navpopup4 },
            { id: 'social', href: '#', title: 'Social', imgSrc: social, bubbleImg: navpopup5 },
        ];
 
    return (
        <div className="fanfic-body">
            <div className="user_bar">
                <div className="container">
                    <div className="span-24">
                        <ul>
                        <li><a href="#" title="Profile">Profile</a></li>
                        <li><a href="#" title="Stories">Stories</a></li>
                        <li><a href="#" title="Subscriptions">Subscriptions</a></li>
                        <li><a href="#" title="Bookmarks">Bookmarks</a></li>
                        <li><a href="#" title="Friends">Friends</a></li>
                        <li><a href="#"title="Blog">Blog</a></li>
                        <li><a href="#" title="Settings">Settings</a></li>
                        <li><a href="#" title="Random Story">Random Story</a></li>
                        <li><a href="#" title="Winglin Importer">Winglin Importer</a></li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div className="header">
                <div className="container">
                    <div className="span-24">
                    
                        <div className="hdr_left">
                    
                        <a href="#" title="lucky-star-fanfic.com"><img src={logo} className="logo-ff" alt="lucky-star-fanfic.com"/></a>
                    
                            <div className="hdr_left_btn_grp">
                                <div className="hdr_btn writing">
                                    <a href="#" title="Start Writing">Start Writing</a>
                                </div>
                                <div className="hdr_btn browsing">
                                    <a href="#" title="Browse Topics">Browse Topics</a>
                                 </div>
                            </div>
                    
                            {/* <div className="login_grp">
                                Hello Guest! &nbsp; <a className="login" href="#" title="Login / Register">Login / Register</a>
                            </div> */}
                        </div>
                    
                        <div className="hdr_right">
                            <div className="top_rt_hdr">
                                <ul>
                                    <li><a href="#" title="FAQ">FAQ</a></li>
                                    <li>|</li>
                                    <li><a href="#" title="Contact">Contact</a></li>
                                    <li>|</li>
                                    <li><a href="#" title="About">About</a></li>
                                </ul>
                                <form action="#" id="cse-search-box" className="search_form">
                                    <input type="hidden" name="cx" value="partner-pub-8482723550199408:wfkhzi-cpj7"/>
                                    <input type="hidden" name="cof" value="FORID:10"/>
                                    <input type="hidden" name="ie" value="ISO-8859-1"/>
                                    <input type="text" className="search_field" name="q" size="40"/> <input className="submit_btn" type="submit" name="sa" value="Search"/>
                                </form>
                            </div>
                    
                            <ul className="nav" id="nav">
                            {navItems.map((item, index) => (
                                <li
                                key={item.id}
                                id={item.id}
                                onClick={() => handleClick(index)}
                                className="nav-item"
                                >
                                <a href={item.href} title={item.title}>
                                    <img src={item.imgSrc} alt={item.title} />
                                    {item.title}
                                </a>
                                {visibleBubble === index && (
                                    <img
                                    src={item.bubbleImg}
                                    className="bubble-img"
                                    alt="i love you"
                                    />
                                )}
                                </li>
                            ))}
                            </ul>
                        </div>
                        <img src={headerPic} className="header-pic"></img>
                    </div>
                </div>
            </div> 
            <div class="subnav_bar">
                <div class="container">
                    <div class="span-24">
                    <ul class="fanfics show_fanfics">
                        <li><a href="#">Latest</a></li>
                        <li><a href="#">Newest</a></li>
                        <li><a href="#">Completed</a></li>
                        <li><a href="#">Alphabetical</a></li>
                    </ul>
                    <ul>
                    <li>&nbsp;</li>
                    </ul>
                    </div>
                </div>
            </div>
            {/* "margin-top:15px" */}
            <div class="container">
            <div class="span-5 sidebar">
                <div class="login_box">
                        <form method="post" action="#">
                            <input type="text" name="username" value="Username" className="textfield" size="20" maxlength="50"/><br/>
                            {/* ="margin-top:3px" */}
                            <input type="password" name="password" value="Password" class="textfield" size="20" maxlength="50"/><br/>
                            {/* "margin-top:13px" */}
                            <div>
                                <input type="submit" class="submit_btn" name="sub_login" value="Login"/>
                            </div>
                        </form>
                    </div>
                    <div class="story_subnav nonmobile">
                    <h1>Featured Fanfics</h1>
                    <table>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <th scope="row">
                                    <figure>
                                    <img src={data.imgSrc} alt={data.username} />
                                    </figure>
                                </th>
                                <td>
                                    <h3>
                                        <a href="#">{data.username}</a> - {data.title}
                                    </h3>
                                    {!isVisible[index] && (
                                    <div className="sidebar-more" onClick={() => toggleVisibility(index)} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
                                        <span style={{ transform: 'rotate(0)', transition: 'transform 0.5s' }}>▶</span>
                                        <span style={{ marginLeft: '5px', fontSize: '13px'}}>more</span>
                                    </div>
                                    )}
                                    {isVisible[index] && <p onClick={() => toggleVisibility(index)} style={{ cursor: 'pointer' }} className="sidebar-desc">{data.description}</p>}
                                    <p className="side-tags">{data.tags}</p>
                                </td>
                            </tr>
                        ))}
                        </table>
                    </div>
                </div>
                <div>
                        
                        <div class="span-19 last">
                         {/* margin-top:35px;background-color:white;padding:20px */}
                            <div class="content">
                                <h1 class="story" name="story_title">No Ordinary Love</h1>
                                    <p>
                                        by <strong><a href="#">starahhsan12</a></strong>
                                        <br/>
                        
                                        Tags &nbsp;
                                        <a href="#">angst</a> &nbsp;
                                        <a href="#">konata</a> &nbsp;
                                        <a href="#">comedy</a> &nbsp;
                                        <a href="#">romance</a> &nbsp;
                                        <a href="#">kissing</a> &nbsp;
                                        <a href="#">luckystar</a> &nbsp;
                                        <a href="#">yuri</a> &nbsp;
                                        {/* style="clear:both" */}
                                        <br/>
                                    </p>
                                    <img className="chapter-pic" src={chapterPic}></img>
                        
                                    <div class="menuNav">
                                    <select name="chapterNav" onchange="document.location = this.value">
                                    ?&gt;
                                        <option value="#">Foreword</option>
                                        <option value="#">Chapter 1</option>
                                        <option value="#">Chapter 2</option>
                                        <option value="#">Chapter 3</option>
                                        <option value="#"selected="selected">Chapter 4</option>
                                        <option value="#">Chapter 5</option>
                                    </select>
                                </div>
                                <div className='ff-chapter'>
                                    <p>Kagami was sweating like crazy in class the next day, she couldn’t stop thinking about that blue-haired demon. All because Konata asked her that damned question:<br/><br/>

                                    “Do you think about girls sometimes…  you know, the way some girls think about boys?” <br/><br/>

                                    That phrase rolled around in Kagamis head the whole night, she barely got any sleep. <br/><br/>

                                    “Great-” she thought “now I’m too tired to focus on class, and there’s a huge exam coming up!” <br/><br/>

                                    Still though, she couldn’t help herself but wonder why Konata would ask that question…unless she suspected that Kagami LIKED girls. Or maybe, Kotana was trying to confess her feelings? NO!!! That kind of thinking was too distracting for Kagami, she wanted to forget it ever happened, she also wanted to forget how cute Kotana looked when she said it, and how her heart skipped a million beats at once… <br/><br/>

                                    Kagami looked around the empty classroom after a big yawn, she had arrived too early again. As more friends and classmates started to walk in and take their seats, Kagami couldn’t help but notice that Konata was nowhere to be found. Finally, when the teacher called out names for attendance, Konata was still not in her usual seat by the window. Kagami was always frustrated by how careless Konata was in class- sleeping, playing video games, doing anything BUT paying attention. But today she felt a new emotion. It felt a lot more like… worry, sadness that she couldn’t see that blue-headed demon in her usual seat by the window… <br/><br/>

                                    “Nanako-Sensei, where is Konata today?” she called out, putting on a cold tone so that no one would suspect that she really cared. I mean, she didn’t care that much… did she? Konata was just a friend. Right. Kagami was just asking about a good friend, thats all. <br/><br/>

                                    “Konata’s mom called, she won’t be coming to class today because she is sick with a cold. If you ask me its probably because she stayed up all night playing a video game. Not that I would know or anything…” retorted Nanko, sheepishly. <br/><br/>

                                    Kagami’s heart began to pound. Konata was sick! Probably because she walked home from her house last night in the rain! A twisted knot of guilt began to form in Kagami’s stomach. Just imagining poor Konata, sick in bed, her lively personality diminished to a feverish helplessness. It was almost too much for Kagami to bear. Not thinking, she quickly jolted up from her desk. <br/><br/>

                                    “Uhh, I don’t feel so good, um, I’m going to the nurse’s office!!” she lied while dashing out of class. <br/><br/>

                                    “Wow. Poor Kagami, she never leaves class, something must really be wrong” muttered Kanata to Tsukasa. <br/><br/>

                                    Kagami’s fast walk turned quickly into a sprint as she exited the school and ran towards Konata’s place. Tears began to form in her eyes as she imagined Konata weakly calling out to her. <br/><br/>

                                    “I’m coming Konata! I’m so sorry I made you like this!! I’m coming to take care of you!!” she thought, blinking away tears from her eyes. <br/><br/>

                                    She must have rung the doorbell about 50 times before Konata finally opened the door. <br/><br/>

                                    “Oi, Kagami? What are you doing here?” remarked a puzzled Konata. Kagami’s eyes began to take in the sight: Konata, standing in front of her, blanket around her shoulders, pocky sticking out of her mouth, video game controller in her hand??? Konata wasn’t sick in bed! She was just fine! <br/><br/>

                                    Without thinking, Kagami threw her arms around Konata, wrapping her in a tight hug. <br/><br/>

                                    “Kagaamiiii you’re squeezing me too tight” said a perfectly healthy sounding Konata. <br/><br/>

                                    “Baka. You had me worried sick!” remarked Kagami, with a little too much relief and warmth in her words. Konata relented and sank into the hug. It felt like they could be like this forever. Kagami took in the scent of Konata’s hair, she felt the softness of Konata’s skin, it felt… right. <br/><br/>

                                    “I’m happy you came” said Konata, with just as much warmth and sweetness as Kagami. <br/><br/>

                                    The girls decided to ditch school together, spending the day laughing and chatting, as close as ever before. There was no tension even after the way they left things yesterday, the conversation never even came up. In the end, Kagami decided that it didn’t really matter what they were—best friends, more than friends, or whatever. As long as they were together, like they were right now, that was enough for her. Maybe someday, she’d figure out what all these strange feelings meant. But for now, she was happy just being with Konata, laughing, going crazy, and maybe blushing a little too. <br/><br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
    
 export default FanficPage;