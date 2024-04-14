import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import NotFoundPage from './Pages/NotFound';
import BookPage1 from './Pages/book1';
import BookPage2 from './Pages/book2';
import BookPage3 from './Pages/book3';
import BookPage4 from './Pages/book4';
import BookPage5 from './Pages/book5';
import BookPage6 from './Pages/book6';
import BookPage7 from './Pages/book7';
import BookPage8 from './Pages/book8';
import BookPage9 from './Pages/book9';
import BookPage10 from './Pages/book10';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} /> {/* Default route */}
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Book1" element={<BookPage1 />} />
          <Route path="/Book2" element={<BookPage2 />} />
          <Route path="/Book3" element={<BookPage3 />} />
          <Route path="/Book4" element={<BookPage4 />} />
          <Route path="/Book5" element={<BookPage5 />} />
          <Route path="/Book6" element={<BookPage6 />} />
          <Route path="/Book7" element={<BookPage7 />} />
          <Route path="/Book8" element={<BookPage8 />} />
          <Route path="/Book9" element={<BookPage9 />} />
          <Route path="/Book10" element={<BookPage10 />} />
          <Route path="*" element={<NotFoundPage />} /> {/* This route will be matched for any other route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;