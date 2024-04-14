import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import NotFoundPage from './Pages/NotFound';
import BookPage from './Pages/book1';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} /> {/* Default route */}
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Book" element={<BookPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* This route will be matched for any other route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;