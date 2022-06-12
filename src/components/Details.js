import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
            <div className='flex flex-col items-center'>
                <h2>Welcome to detail: {Id}</h2>
                <h2>Welcome to detail: {selected.name}</h2>
                <div class="card  bg-base-100 shadow-xl shadow-secondary max-w-xl">
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
                    <div class="py-3 text-center">
                        <h2 class="text-2xl font-bold text-center">{selected.name}</h2>
                        <p className='text-center'>{selected.description}</p>
                        <p className='text-center'><span className='text-xl font-bold'>Key Features: </span>{selected.features.split('.').map((i, index) => <ul className=''><li>{index + 1}. {i}</li></ul>)}</p>
                        <div class="card-actions justify-center gap-5 my-5">
                            <a href="https://wireehouse.web.app/"><button class="btn btn-primary text-white b">Live Site</button></a>
                            <a href="https://github.com/nafeescse/Bike-warehouse-with-React"><button class="btn btn-primary text-white">Github</button></a>
                        </div>
                    </div>
                </div>

            </div>
        )

        return
        <p>Error 404 Not Found. Please return to homepage</p>

    }
};

export default Details;

