import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Details from './Details';

const Project = ({ project }) => {

    const { id, name, img, description, tech, liveLink, gitLink} = project;
    const navigate = useNavigate();

    const navigateToDetails = id => {
        navigate(`/project/${id}`);
        <Details key={project.id} project={project}></Details>
    }
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000"  className="card  bg-base-100 shadow-xl shadow-secondary">
            <figure className='transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-125 duration-500'><img className='h-[200px] w-full m-1 rounded-t-2xl overflow-y-auto' src={img} alt="Album"/></figure>
            <div className="py-3 text-center">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <p className='text-center'>{description}</p>
                <p className='text-center mx-5 gap-2'>{tech.split('-').map(i => <div className="badge badge-success text-white">{i}</div>)}</p>
                <div className="card-actions justify-center gap-5 my-5">
                            <a href={liveLink}><button className="btn btn-primary btn-sm text-white gap-2">Live Site <FaLink></FaLink></button></a>
                            <a href={gitLink}><button className="btn btn-primary btn-sm text-white gap-2">Github <BsGithub></BsGithub></button></a>
                        </div>
                <button onClick={() => navigateToDetails(id)} className='btn btn-primary btn-sm btn-wide gap-2 text-white'>Details <MdExplore></MdExplore></button>
            </div>
        </div>

    );
};

export default Project;