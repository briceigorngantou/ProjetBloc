import React from 'react';
import './connexion.css';
import RightPage from '../../Components/RightPage/RightPage';
// import Navbar from '../../Components/Navbar/Navbar'
import Login from '../../Components/Login/Login';

export default function Connexion() {
    return (
        <>
            <div className="connexion">
                <Login/>
                <RightPage/>
            </div>
            <div className="col-sm">
                 <p>
                    &copy;{new Date().getFullYear()} | FernandBlog | Tous droits reserves | Privacy
                </p>
            </div>
        </>
    )
}
