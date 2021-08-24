import React, { useState, useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Inscription from './Pages/Inscription/Inscription';
import Connexion from './Pages/Connexion/Connexion';
import Listings from './Pages/Listings/Listings';
import Contact from './Pages/Contact/Contact';
import Write from './Pages/Write/Write';
import Single from './Pages/Single/Single';
import Settings from './Pages/Settings/Settings';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import { PostContext } from './PostContext';
import like from "./ImageFernand/heart.svg";
import comment from "./ImageFernand/chat.svg";
import img1 from "./ImageFernand/harrison-broadbent-1mu9gF8OhNk-unsplash.jpg";
import img2 from "./ImageFernand/frank-wang-ogxlyCA1BQc-unsplash.jpg";
import img3 from "./ImageFernand/marius-masalar-CyFBmFEsytU-unsplash.jpg";
import img4 from "./ImageFernand/niclas-illg-wzVQp_NRIHg-unsplash.jpg";
import img5 from "./ImageFernand/safar-safarov-LKsHwgzyk7c-unsplash.jpg";
import img6 from "./ImageFernand/nordwood-themes-bJjsKbToY34-unsplash.jpg";
import img7 from "./ImageFernand/markus-spiske-iar-afB0QQw-unsplash.jpg";
import img8 from "./ImageFernand/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";
import img9 from "./ImageFernand/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg";

function App() {

  const [post, setPost] = useState([
    {
      id: 1,
      image: img1,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "1 hour ago",
      like: like,
      comment: comment,
    },
    {
      id: 2,
      image: img4,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "1 hour ago",
      like: like,
      comment: comment,
    },
    {
      id: 3,
      image: img2,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "1 hour ago",
      like: like,
      comment: comment,
    },
    {
      id: 4,
      image: img3,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "1 hour ago",
      like: like,
      comment: comment,
    },
    {
      id: 5,
      image: img4,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "2 hour ago",
      like: like,
      comment: comment,
    },
    {
      id: 6,
      image: img5,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "3 hour ago",
      like: like,
      comment: comment,
    },
    {
      id: 7,
      image: img6,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "3 hour ago",
      like: like,
      comment: comment,
    },
    {
      id: 8,
      image: img7,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "5 hour ago",
      like: like,
      comment: comment,
    },
    {
      id: 9,
      image: img8,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "6 hour ago",
      like: like,
      comment: comment,
    },
    {
      id: 10,
      image: img9,
      infos1: "#Arduino",
      infos2: "#Programmation",
      titre:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      date_post: "7 hour ago",
      like: like,
      comment: comment,
    },
  ]);
    return (
      <div className="App">
        <Router  forceRefresh={false}>
          <Navbar/>
          <PostContext.Provider value={{post,setPost}} >
            <Route path="/" exact component={Home}/>
            <Route path="/Single" exact component={Single}/>
          </PostContext.Provider>
          <Route path="/Connexion" exact component={Connexion }/>
          <Route path="/Inscription" exact component={ Inscription}/>
          <Route path="/Listings" exact component={ Listings}/>
          <Route path="/Contact" exact component={Contact }/>
          <Route path="/Write" exact component={Write }/>
          <Route path="/Settings" exact component={ Settings}/>

        </Router>

      </div>
    );
}


export default App;