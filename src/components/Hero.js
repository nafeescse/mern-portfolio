import React from 'react';
import linkedin from '../assets/img/in.png';
import github from '../assets/img/github.png';
import facebook from '../assets/img/facebook (1).png';
import mine from '../assets/img/mine.jpg';
import Type from './Type';

const Hero = () => {
    return (
        <div id='hero' className=" h-100 bg-secondary py-10">
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center py-auto'>
                <div className="avatar py-10 lg:py-24 ">
                    <div className="w-80 lg:w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={mine} alt='' />
                    </div>
                </div>

                <div className=' flex flex-col items-center lg:items-start my-auto'>
                    <p className='uppercase text-2xl'>Hi there I'm</p>
                    <p className='text-5xl lg:text-6xl font-bold py-3'><span className='text-primary'>Abdur</span> Rahman</p>
                    <Type className='text-5xl'></Type>
                    <p className='px-16 lg:pl-0 text-xl text-justify py-5'>Passionate about creating interactive applications and experienced in MERN Stack Web Development in both the development and the business aspects of technology.</p>

                    <div className='flex justify-center items-center my-5'>
                        <button className="btn btn-primary mr-10 rounded-full text-white"><a target='_blank' href="https://drive.google.com/file/d/1S2azPzzz7atzwOPcdG8HMh-m-COM7Zwt/view" rel='noreferrer'>Resume</a></button>
                        <div>
                            <button className="btn-accent w-10   text-white"><a rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/abdur-rahman-nafees-a609a2218" class="home__social-icon"><img src={linkedin} alt="" /></a></button>

                            <button className="w-10 mx-3 btn-accent   text-white"><a rel='noreferrer' target='_blank' href="https://github.com/nafeescse" class=" w-116"><img src={github} alt="" /></a></button>

                            <button className="btn-accent w-10  text-white"><a href="https://www.facebook.com/nafeesbinz" target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a></button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;