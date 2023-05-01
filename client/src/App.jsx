import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Groups from './components/Groups';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/group" element={<Groups />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
