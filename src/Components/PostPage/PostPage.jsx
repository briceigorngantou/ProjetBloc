import React from 'react';
import './postpage.css';
import Post from './Post/Post';

export default function PostPage(){
    return(
        <div>
            <p className="title">Derniers articles publier</p>
            <div className="postpage">
                <Post/>
            </div>
        </div>
    );
}
