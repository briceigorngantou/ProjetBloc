import React from 'react';
import PublishPage from '../../Components/PublishPage/PublishPage';
import RightPage from '../../Components/RightPage/RightPage';
import './write.css';

export default function Write() {
    return (
        <>
            <div className="write">
                <PublishPage/>
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

