import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/*
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blog/:id/edit" element={<EditBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
*/
