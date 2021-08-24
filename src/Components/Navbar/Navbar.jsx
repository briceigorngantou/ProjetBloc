import React from 'react';
import './navbar.css';
import Logo from '../../ImageFernand/logo1.png';
import { Link , useHistory} from 'react-router-dom';
import Profile from '../../ImageFernand/alex-knight-2EJCSULRwC8-unsplash.jpg';;

export default function Navbar(){

    let history=useHistory();
    var statutUser=true;
    return (
        <div >
            <navbar className="navbar navbar-light bg-light">
                <div>
                    <Link to="/">
                        <img src={Logo} alt="" className="img_logo"/>
                    </Link>
                </div>
                <ul className="navlist-search">
                    <li className="navlist-search-items">
                        <input className="form-control" type="search" placeholder="Search..." aria-label="Search"/>
                    </li>
                </ul>
                {
                /*
                    si l'utilisateur n'est pas connecte alors on
                    n'affiche pas son profil sur la barre de navigation sinon on affiche son profil
                */}
                {
                    !statutUser ? (
                        <ul className="navlist-btn">
                            <li className="navlist-btn-items">
                                <button className="btn btn-primary" onClick={()=> history.push("/Connexion")} type="button">Sign In</button>
                            </li>
                            <li className="navlist-btn-items btn-connexion">
                                <button className="btn btn-primary" onClick={()=> history.push("/Inscription")} type="button">Create account</button>
                            </li>
                        </ul>
                    ):(
                        <ul className="navlist-profile">
                            <li className="navlist-profile-items">
                                <img src={Profile} title={"Brice"} onClick={()=>history.push("/Settings")} alt="" className="profile"/>
                            </li>
                        </ul>
                    )
                }
            </navbar>
        </div>
    );
}