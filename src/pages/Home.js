import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About';
import GlassCards from '../components/GlassCards'
import Benefits from '../components/Benefits'
import Info from '../components/Info';
import Team from '../components/Team';
import HomeLast from '../components/HomeLast.jsx';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Team />
        <GlassCards />
        <Benefits />
        <Info />
        <HomeLast />
        <Footer />
    </div>
  )
}

export default Home;