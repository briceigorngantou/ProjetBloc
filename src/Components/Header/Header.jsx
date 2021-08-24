import React from 'react';
import './header.css';
import Image from '../../ImageFernand/ryan-porter-6RuNmpIio4U-unsplash.jpg';

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitre">
                <span className="headerTitre1">
                    <i>Nouvelles et annonces sur tout ce qui concerne l'actualite des nouvelles </i><br/>
                    <i>  technologies de l'information et de la communication, la Programmation, l'electronique</i></span>
                <span className="headerTitre2"><i>Fernand-Blog</i></span>
            </div>
            <img src={Image} alt="" className="header_img"/>

        </div>
    );
}