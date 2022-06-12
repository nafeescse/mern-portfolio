import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import project1 from '../assets/img/React App.png'
import Details from './Details';

const Project = ({ project }) => {

    const { id, name, img, description, price } = project;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/project/${id}`);
        <Details key={project.id} project={project}></Details>
    }
    return (
        <div class="card  bg-base-100 shadow-xl shadow-secondary">
            <figure className='transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-125 duration-500'><img className='h-[200px] w-full m-1 rounded-t-2xl overflow-y-auto' src={img} alt="Album"/></figure>
            <div class="py-3 text-center">
                <h2 class="text-2xl font-bold text-center">{name}</h2>
                <p className='text-center'>{description}</p>
                <div class="card-actions justify-center gap-5 my-5">
                    <a href="https://wireehouse.web.app/"><button class="btn btn-primary text-white b">Live Site</button></a>
                    <a href="https://github.com/nafeescse/Bike-warehouse-with-React"><button class="btn btn-primary text-white">Github</button></a>

                </div>
                <button onClick={() => navigateToDetails(id)} className='btn btn-primary'>Details</button>
            </div>
        </div>

    );
};

export default Project;