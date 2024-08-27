import "./FanficPage.css";
import home from "../assets/fanficpage/home_icon.png";
import fanfics from "../assets/fanficpage/fanfics_icon.png";
import buttonBg from "../assets/fanficpage/button_bg.png";
import users from "../assets/fanficpage/users.png";
import hdrLeftBg from "../assets/fanficpage/hdr_left_bg.png";
import headerBg from "../assets/fanficpage/header_bg.png";
import popular from "../assets/fanficpage/popular_icon.png";
import social from "../assets/fanficpage/social_icon.png";
import pencil from "../assets/fanficpage/pencil_icon.png";
import topHeaderBg from "../assets/fanficpage/top_rt_header_bg.png";
import logo from "../assets/fanficpage/aff_logo.png";



const FanficPage = () => {
 
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
                                    <a href="#" title="Start Writing"><img src={pencil} alt="Start Writing"/> Start Writing</a>
                                </div>
                                {/* style="margin-left:8px" */}
                                <div className="hdr_btn browsing">
                                    <a href="#" title="Browse Topics">Browse Topics</a>
                                 </div>
                            </div>
                    
                            <div className="login_grp">
                                Hello Guest! &nbsp; <a className="login" href="#" title="Login / Register">Login / Register</a>
                            </div>
                        </div>
                    
                        <div className="hdr_right">
                    
                            <div className="top_rt_hdr">
                                <ul>
                                    <li><a href="#" title="FAQ">FAQ</a></li>
                                    <li>|</li>
                                    <li><a href="#" title="Contact">Contact</a></li>
                                    <li>|</li>
                                </ul>
                                <form action="#" id="cse-search-box" className="search_form">
                                    <input type="hidden" name="cx" value="partner-pub-8482723550199408:wfkhzi-cpj7"/>
                                    <input type="hidden" name="cof" value="FORID:10"/>
                                    <input type="hidden" name="ie" value="ISO-8859-1"/>
                                    <input type="text" className="search_field" name="q" size="40"/> <input className="submit_btn" type="submit" name="sa" value="Search"/>
                                </form>
                            </div>
                    
                            <ul className="nav" id="nav">
                                <li id="home-btn"><a href="#" title="Home"><img src={home} alt="Home"/>Home</a></li>
                                <li><a href="#" id="fanfics" title="Fanfics"><img src={fanfics} alt="Fanfics"/>Fanfics</a></li>
                                <li><a href="#" id="popular" title="Popular"><img src={popular} alt="Popular"/>Popular</a></li>
                                <li><a href="#" id="users" title="Users"><img src={users} alt="Users"/>Users</a></li>
                                <li><a href="#" id="social" title="Social"><img src={social} alt="Social"/>Social</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};
    
 export default FanficPage;