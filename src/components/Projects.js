import React, { useEffect, useState } from 'react';

import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='projects' className='px-10 py-10 bg-secondary'>
            <p data-aos="fade-up"
                    data-aos-duration="1000"  className='text-center text-3xl text-primary font-bold uppercase my-10'>Projects</p>

            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;

