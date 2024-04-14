import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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

        {/* Make the bookpic clickable and direct to book1.js */}
        <Link to="/Book1">
          <img src={BookPic} alt="BookPic" className="bookpic" />
        </Link>
        <Link to="/Book2">
          <img src={BookPic} alt="BookPic" className="bookpic" />
        </Link>
        <Link to="/Book3">
          <img src={BookPic} alt="BookPic" className="bookpic" />
        </Link>
        <Link to="/Book4">
          <img src={BookPic} alt="BookPic" className="bookpic" />
        </Link>
        <Link to="/Book5">
          <img src={BookPic} alt="BookPic" className="bookpic" />
        </Link>
        <Link to="/Book6">
          <img src={BookPic} alt="BookPic" className="bookpic" />
          {/* <p>The Tale of Mr. Jeremy Fisher</p> */}
        </Link>
        <Link to="/Book7">
          <img src={BookPic} alt="BookPic" className="bookpic" />
        </Link>
        <Link to="/Book8">
          <img src={BookPic} alt="BookPic" className="bookpic" />
        </Link>
        <Link to="/Book9">
          <img src={BookPic} alt="BookPic" className="bookpic" />
        </Link>
        <Link to="/Book10">
          <img src={BookPic} alt="BookPic" className="bookpic" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
