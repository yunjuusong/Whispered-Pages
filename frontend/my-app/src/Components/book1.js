import React from 'react';
import Logo from '../Components/LOGO.png'; // Adjust the path to access the image
import './book.css';

// @everyone pls put html books + recording stuff in  <div className="text-container"></div>

function book1() {
  return (
    <div className="book-container">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="text-container">
        
      </div>

    </div>
  );
}

export default book1;
