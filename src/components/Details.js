import React, { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';
import {BsGithub } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { Id } = useParams();

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [Id])
    console.log(projects);
    const selected = projects.find(item => item.id == Id);
    console.log(selected);
    if (selected) {
        return (
            <div className='flex flex-col items-center my-12 mx-5 '>
                <div class="card  bg-base-100 shadow-5xl rounded-none rounded-tr-3xl rounded-bl-3xl shadow-secondary max-w-3xl">
                    <div>
                        <div class="carousel w-full">
                            <div id="slide1" class="carousel-item relative w-full ">
                                <img src={selected.img[0]} className='mx-auto' alt='' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full ">
                                <img src={selected.img[1]} className='mx-auto' alt='' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full ">
                                <img src={selected.img[2]} className='mx-auto' alt='' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" class="btn btn-circle">❮</a>
                                    <a href="#slide4" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" class="carousel-item relative w-full ">
                                <img src={selected.img[3]} className='mx-auto' alt='' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" class="btn btn-circle">❮</a>
                                    <a href="#slide1" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="py-3 text-center bg-secondary">
                        <h2 class="text-2xl font-bold text-center">{selected.name}</h2>
                        <p className='text-center'>{selected.description}</p>
                        <p className='flex flex-col items-start mx-10'><span className='text-xl font-bold '>Key Features: </span>{selected.features.split('.').map((i, index) => <div className='text-start'><p>{index + 1}. {i}</p></div>)}</p>
                        <div class="card-actions justify-center gap-5 my-5">
                            <a href={selected.liveLink}><button class="btn btn-primary text-white gap-2">Live Site <FaLink></FaLink></button></a>
                            <a href={selected.gitLink}><button class="btn btn-primary text-white gap-2">Github <BsGithub></BsGithub></button></a>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
};

export default Details;

