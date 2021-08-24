import React from "react";
import './home.css';
import LeftPage from '../../Components/LeftPage/LeftPage';
import RightPage from "../../Components/RightPage/RightPage";
import PostPage from "../../Components/PostPage/PostPage";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

export default function Home(){
    return(
        <>
            <Navbar/>
            <Header/>
            <div className="homepage">
                <div className="homepage2">
                    <LeftPage/>
                    <PostPage/>
                </div>
                <RightPage/>
            </div>
            <div className="col-sm">
                 <p>
                    &copy;{new Date().getFullYear()} | FernandBlog | Tous droits reserves | Privacy
                </p>
            </div>
        </>
    );
}