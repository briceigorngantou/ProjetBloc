import React, { useContext } from 'react';
import './singlepost.css';
import ImagePost from '../../ImageFernand/jannis-brandt-4mHaSX8zvJI-unsplash.jpg';
import ImagePost1 from '../../ImageFernand/chris-ried-bN5XdU-bap4-unsplash.jpg';
import ImagePost2 from '../../ImageFernand/christian-wiediger-KV2vFOYItcY-unsplash.jpg';
import ImageDelete from '../../ImageFernand/user_delete.png';
import ImageEdit from '../../ImageFernand/modifier.gif';
import IconUser from '../../ImageFernand/alex-knight-2EJCSULRwC8-unsplash.jpg';
import { PostContext } from '../../PostContext';

export default function SinglePost(){

    return (
        <div className="singlepost">
            <div className="singlepost-info">
                <img src={ImagePost} className="ImagePost" alt=""/>
                <h3 className="singlepost-titre">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    <div className="singlepost-edit">
                        <img src={ImageEdit} alt="" onClick={()=> alert("Modification OK!!")} className="ImageEdit"/>
                        <img src={ImageDelete} alt="" onClick={()=> alert("Supression OK!!")} className="ImageEdit"/>
                    </div>
                </h3>

                <div className="singlepost-description">
                    <div className="singlepost-auteur">
                        <span>
                           <img src={IconUser} alt="" className="singlepost-iconuser"/> <b><i> Brice</i></b>
                        </span>
                        <span className="singlepost-date"> 1 hour ago</span>
                    </div>
                    <p className="singlepost-description-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                    </p>
                    <img src={ImagePost1} alt="" className="ImageDescription"/>
                    <p className="singlepost-description-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                    </p>
                    <img src={ImagePost2} alt="" className="ImageDescription"/>
                    <p className="singlepost-description-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                    </p>
                </div>
            </div>
        </div>
    )
}
