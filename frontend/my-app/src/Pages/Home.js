// Home.js
import React from 'react';
import Logo from '../Components/LOGO.png'; // Adjust the path to access the image
import BookPic from '../Components/book.png';
import './Home.css';

function Home() {

    
  return (
    <div className="home-container">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="text-container">
        <h1>Welcome to My Ebook Reading Platform</h1>
        <p>Start your reading adventure here!</p>

        <img src={BookPic} alt="BookPic" className="bookpic" />
        <img src={BookPic} alt="BookPic" className="bookpic" />
        <img src={BookPic} alt="BookPic" className="bookpic" />
        <img src={BookPic} alt="BookPic" className="bookpic" />
        <img src={BookPic} alt="BookPic" className="bookpic" />
        <img src={BookPic} alt="BookPic" className="bookpic" />
        <img src={BookPic} alt="BookPic" className="bookpic" />
        <img src={BookPic} alt="BookPic" className="bookpic" />
        <img src={BookPic} alt="BookPic" className="bookpic" />
        <img src={BookPic} alt="BookPic" className="bookpic" />
      </div>
    </div>
  );
}

export default Home;
