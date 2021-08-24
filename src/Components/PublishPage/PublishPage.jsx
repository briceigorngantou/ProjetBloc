import React from 'react'
import './publishpage.css';
import ImagePost from '../../ImageFernand/harrison-broadbent-afZVP8xbbw0-unsplash.jpg';
import IconImport from '../../ImageFernand/icons8_add_48px.png';

export default function PublishPage() {
    return (
        <div className="publish">
            <div className="publish-head">
                <img className="publish-head-image" src={ImagePost} alt="" />
                <div className="publish-head-title-info">
                    <button className="btn">
                        <label for="icon-import">
                            <img clasName="publish-head-icon" src={IconImport} alt=""/> Join a picture
                        </label>
                    </button>
                    <input type="file" id="icon-import" accept={".png, .jpg , .jpeg , .svg"} style={{display:"none"}}/>
                    <input type="text" className="publish-head-title-input" placeholder="Title"/>
                </div>
            </div>
            <div className="publish-description">
                <button className="btn">
                    <label for="icon-import">
                        <img clasName="publish-head-icon" src={IconImport} alt=""/> Add an image to the post
                    </label>
                </button>
                <textarea placeholder="Tell your story..." className="publish-description-area"></textarea>
                <button className="btn publish-btn btn-primary">Publish</button>
            </div>
        </div>
    )
}
