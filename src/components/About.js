import React from 'react';

import mine from '../assets/img/amar.jpg'

const About = () => {
    return (

        <div id='about'>
            <p data-aos="fade-up"
                    data-aos-duration="1000"  className='text-center text-3xl text-primary font-bold uppercase mt-10'>About Me</p>
            <div className='flex flex-col lg:flex-row my-10 items-center'>
                <div data-aos="fade-up"
                    data-aos-duration="1000"  className='w-5/6 lg:w-1/2 mx-auto order-2 lg:order-1'>
                    <p className='lg:w-3/4 text-xl m-auto text-justify py-5 first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-up-down'>
                        A web developer who specializes in the front-end, having a positive attitude and am eager to learn new trails. Always ready to put my programming skills to work with a talented engineering team to create high-quality solutions. Experienced in MERN Stack Web Development in both the development and the business aspects of technology. I am working with React, Node.js, Express JS, React Native and MongoDB. I also have experience in developing static websites using HTML, CSS and JavaScript(ES6). I can deliver pixel-perfect design and clean code.

                    </p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000"  className='w-3/4 lg:w-1/2 mx-auto order-1 '><img className='w-3/4 mx-auto rounded-2xl' src={mine} alt="" /></div>

            </div>
        </div>

    );
};

export default About;