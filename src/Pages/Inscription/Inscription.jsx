import React from 'react';
import RightPage from '../../Components/RightPage/RightPage';
// import image from '../../ImageFernand/retrosupply-jLwVAUtLOAQ-unsplash.jpg';
import './inscription.css';
import Registration from '../../Components/Registration/Registration';

export default function Inscription() {
    return (
        <>
            <div className="inscription">
                <Registration/>
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
