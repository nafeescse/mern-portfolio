import React from 'react';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Service from '../components/Service';
import Skills from '../components/Skills';

const Home = () => {
    return (
        <div className='z-0'>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Service></Service>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;