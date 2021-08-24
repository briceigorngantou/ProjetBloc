import React from 'react';
import RightPage from '../../Components/RightPage/RightPage';
import SinglePost from '../../Components/SinglePost/SinglePost';
import './single.css';


export default function Single() {
    return (
        <>
            <div className="single">
                <SinglePost/>
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
