import React ,{useState} from 'react';
import './leftpage.css';


export default function LeftPage(){

    const [visite, setvisite] = useState([
        {
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        },
        {
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        },
        {
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        },
        {
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        },
        {
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        },
        {
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        }
    ]);
    var information="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,dignissim sit amet, adipiscing ,semper congue."

    const [annonce,setannonce]=useState([
        {
            info: information
        },
        {
            info: information
        },
        {
            info: information
        },
        {
            info: information
        },
        {
            info: information
        },
        {
            info: information
        },
        {
            info: information
        }
    ])
    const [tag,settag]=useState([
        {
            info: "#JavaScript"
        },
        {
            info: "#Css"
        },
        {
            info: "#Web dev"
        },
        {
            info: "#React Js"
        },
        {
            info: "#linux"
        },
        {
            info: "#Arduino"
        },
        {
            info: "#Java"
        },
        {
            info: "#Python"
        }
    ])

    return(
        <div className="leftpage">
            <div className="leftpage-bloc-plus-visite">
                <p className="leftpage-titre">Les plus visites</p>
                <ul className="leftpage-bloc-list">
                    {
                        visite.map((mesvisites) =>
                        <li className="leftpage-bloc-listItem">
                            <span className="leftpage-bloc-Item-titre">
                                <a href="#" >{mesvisites.info}</a>
                            </span>
                        </li>
                    )}
                </ul>
            </div>

            <div className="leftpage-bloc-annonces">
                <p className="leftpage-titre">Annonces</p>
                <ul className="leftpage-bloc-list">
                    {
                        annonce.map((monannonce) =>
                            <li className="leftpage-bloc-listItem">
                                <span className="leftpage-bloc-Item-titre">
                                    <a href="#">{monannonce.info}
                                    </a>
                                </span>
                            </li>
                    )}
                </ul>
            </div>

            <div className="leftpage-bloc-tag">
                <p className="leftpage-titre">Tags populaires</p>
                <ul className="leftpage-bloc-tag-list">
                    {
                        tag.map((tags) =>
                            <li className="leftpage-bloc-listItem">
                                <span className="leftpage-bloc-Item-titre">
                                    <a href="#">{tags.info}</a>
                                </span>
                            </li>
                    )}
                </ul>
            </div>
        </div>
    );
}