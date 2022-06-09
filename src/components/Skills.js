import React from 'react';

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiReactrouter, SiExpress, SiMongodb } from 'react-icons/si';


const Skills = () => {
    return (

        <div id='skills' className='flex flex-col items-center py-10 bg-secondary py-16'>
            <p className='text-center text-3xl text-primary font-bold uppercase my-10'>TECH I USE</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 bg-accent shadow-xl rounded-xl'>
                <div>
                    <div className="card w-96 bg-base-100">
                        <div className="card-body transition ease-in-out delay-50  hover:-translate-y-5 hover:scale-110 duration-300 overflow-visible hover:bg-secondary">
                            <div className='card-title flex justify-between'><h2 className="flex items-center"> <FaHtml5 className='mr-2'></FaHtml5>HTML5</h2>
                                <h2 className="">95%</h2></div>
                            <progress className="progress progress-primary w-84" value="95" max="100">95%</progress>
                        </div>
                        <div className="card-body transition ease-in-out delay-50  hover:-translate-y-5 hover:scale-110 duration-300 overflow-visible hover:bg-secondary">
                            <div className='card-title flex justify-between'><h2 className="flex items-center"> <FaCss3Alt className='mr-2'></FaCss3Alt>CSS3</h2>
                                <h2 className="">90%</h2></div>
                            <progress className="progress progress-primary w-84" value="90" max="100">90%</progress>

                        </div>
                        <div className="card-body transition ease-in-out delay-50  hover:-translate-y-5 hover:scale-110 duration-300 overflow-visible hover:bg-secondary">
                            <div className='card-title flex justify-between'><h2 className="flex items-center"> <TbBrandJavascript className='mr-2'></TbBrandJavascript>JAVASCRIPT(ES6)</h2>
                                <h2 className="">80%</h2></div>
                            <progress className="progress progress-primary w-84" value="80" max="100">80%</progress>

                        </div>
                        <div className="card-body transition ease-in-out delay-50  hover:-translate-y-5 hover:scale-110 duration-300 overflow-visible hover:bg-secondary">
                            <div className='card-title flex justify-between'><h2 className="flex items-center"> <FaReact className='mr-2'></FaReact>REACT JS</h2>
                                <h2 className="">85%</h2></div>
                            <progress className="progress progress-primary w-84" value="85" max="100">85%</progress>

                        </div>

                    </div>

                </div>
                <div>
                    <div className="card w-96 bg-base-100">
                        <div className="card-body transition ease-in-out delay-50  hover:-translate-y-5 hover:scale-110 duration-300 overflow-visible hover:bg-secondary">
                            <div className='card-title flex justify-between'><h2 className="flex items-center"> <SiReactrouter className='mr-2'></SiReactrouter>ROUTER</h2>
                                <h2 className="">90%</h2></div>
                            <progress className="progress progress-primary w-84" value="90" max="100">90%</progress>

                        </div>
                        <div className="card-body transition ease-in-out delay-50  hover:-translate-y-5 hover:scale-110 duration-300 overflow-visible hover:bg-secondary">
                            <div className='card-title flex justify-between'><h2 className="flex items-center"> <FaNodeJs className='mr-2'></FaNodeJs>NODE JS</h2>
                                <h2 className="">75%</h2></div>
                            <progress className="progress progress-primary w-84" value="75" max="100">75%</progress>

                        </div>
                        <div className="card-body transition ease-in-out delay-50  hover:-translate-y-5 hover:scale-110 duration-300 overflow-visible hover:bg-secondary">
                            <div className='card-title flex justify-between'><h2 className="flex items-center"> <SiExpress className='mr-2'></SiExpress>EXPRESS JS</h2>
                                <h2 className="">80%</h2></div>
                            <progress className="progress progress-primary w-84" value="80" max="100">80%</progress>

                        </div>
                        <div className="card-body transition ease-in-out delay-50  hover:-translate-y-5 hover:scale-110 duration-300 overflow-visible hover:bg-secondary">
                            <div className='card-title flex justify-between'><h2 className="flex items-center"> <SiMongodb className='mr-2'></SiMongodb>MONGODB</h2>
                                <h2 className="">75%</h2></div>
                            <progress className="progress progress-primary w-84" value="75" max="100">75%</progress>

                        </div>

                    </div>





                </div>
            </div>
        </div>
    );
};

export default Skills;