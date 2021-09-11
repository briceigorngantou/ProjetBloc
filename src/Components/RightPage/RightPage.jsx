import React from 'react';
import './rightpage.css';
import ImgUser from '../../ImageFernand/andras-vas-Bd7gNnWJBkU-unsplash.jpg';
import Facebook from '../../ImageFernand/facebook.svg';
import Twitter from '../../ImageFernand/twitter.svg';
import Whatsapp from '../../ImageFernand/whatsapp.svg';
import Mail from '../../ImageFernand/envelope-fill.svg';
import Position from '../../ImageFernand/geo-alt-fill.svg';
import { Link } from 'react-router-dom';

export default function RightPage(){
    return(
        <div className="rightpage">
            <div className="rightpageItem">
                <span className="rightpageTitle"> ABOUT ME</span>
                <img src={ImgUser} alt="" className="img_rightpage"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                    dignissim sit amet, adipiscing nec,
                </p>
            </div>
            <div className="rightpageItem">
                <span className="rightpageTitle"> MON BLOG </span>
                <ul className="rightpageList">
                    <li className="rightpageListItem"><Link to="/"><button className="btn btn-primary">Home</button></Link></li>
                    <li className="rightpageListItem"><Link to="/Connexion"><button className="btn btn-primary">Sign In</button></Link></li>
                    <li className="rightpageListItem"><Link to="/Inscription"><button className="btn btn-primary">Create account</button></Link></li>
                    <li className="rightpageListItem"><Link to="/Listings"><button className="btn btn-primary">Listings</button></Link></li>
                    <li className="rightpageListItem"><Link to="/Write"><button className="btn btn-primary">Write</button></Link></li>
                    <li className="rightpageListItem"><Link to="Settings"><button className="btn btn-primary">Settings</button></Link></li>
                    <li className="rightpageListItem"><Link to="Contact"><button className="btn btn-primary">Contact</button></Link></li>

                </ul>
            </div>
            <div className="rightpageItem">
                <span className="rightpageTitle"> CATEGORIES</span>
                <ul className="rightpageList">
                    <li className="rightpageListItem">Hacking</li>
                    <li className="rightpageListItem">Reseaux</li>
                    <li className="rightpageListItem">Electronique</li>
                    <li className="rightpageListItem">Data Science</li>
                    <li className="rightpageListItem">Securite-Reseaux</li>
                    <li className="rightpageListItem">Machine Learning</li>
                    <li className="rightpageListItem">Programmation Web</li>

                </ul>
            </div>
            <div className="rightpageItem">
                <span className="rightpageTitle"> FOLLOW US</span>
                <ul className="rightpageSocial">
                    <li className="rightpageListItem"><a href="" alt=""><img src={Facebook} className="img_icon" alt=""/> Facebook</a></li>
                    <li className="rightpageListItem"><a href="" alt=""><img src={Twitter} className="img_icon" alt=""/> Twitter</a></li>
                    <li className="rightpageListItem"><img src={Whatsapp} className="img_icon" alt=""/> +237 600000000</li>
                    <li className="rightpageListItem"><img src={Mail} className="img_icon" alt=""/> fernandblog@gmail.com</li>
                    <li className="rightpageListItem"><img src={Position} className="img_icon" alt=""/> Douala-Cameroun</li>
                </ul>
            </div>
        </div>
    );
}