import './App.css';
import React from 'react';
import NavbarApp from './components/Navbar';
import HeroSection from './components/Hero';
import CourseSection from './components/CourseSection';
import AboutPage from './components/About';

function App() {
  return (
    <>
      <NavbarApp/>
      <HeroSection/>
      <AboutPage/>
      <CourseSection/>
    </>
  );
}

export default App;
