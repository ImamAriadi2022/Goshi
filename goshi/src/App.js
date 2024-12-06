import './App.css';
import React from 'react';
import NavbarApp from './components/Navbar';
import HeroSection from './components/Hero';
import CourseSection from './components/CourseSection';

function App() {
  return (
    <>
      <NavbarApp/>
      <HeroSection/>
      <CourseSection/>
    </>
  );
}

export default App;
