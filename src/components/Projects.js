import React, { useEffect, useState } from 'react';
import project1 from '../assets/img/React App.png'
import project2 from '../assets/img/Assignment-Bootstrap (1).png'
import project3 from '../assets/img/TeachMe (1).png'
import project4 from '../assets/img/React App (2).png'
import project5 from '../assets/img/React App (3).png'
import project6 from '../assets/img/React App (4).png'
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

useEffect(() => {
    fetch('projects.json')
    .then(res => res.json())
    .then(data => setProjects(data))
},[])
    return (
        <div id='projects' className='px-10 py-10 bg-secondary'>
            <p className='text-center text-3xl text-primary font-bold uppercase my-10'>Projects</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
            projects.map(project => <Project key={project.id} project={project}></Project>)
            }
            </div>
        </div>
    );
};

export default Projects;

// return (
//     <div className='w-75 flex flex-col items-center justify-center mx-auto'>
//         <h2 className='fs-xl text-center my-5 text-red-800 underline underline-offset-4'>Available Courses </h2>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
//         {
//             courses.map(course => <Course key={course.id} course={course}></Course>)
//         }
//         </div>
//     </div>
// );


{/* <div class="card  bg-base-100 shadow-xl shadow-secondary">
                    <figure className='transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-125 duration-500'><img className='h-[200px] w-full m-1 rounded-t-2xl overflow-y-auto' src={project1} alt="Album" /></figure>
                    <div class="py-3 text-center">
                        <h2 class="text-2xl font-bold text-center">Bike Xpress</h2>
                        <p className='text-center'>Bike Warehouse Management Website .</p>
                        <div class="card-actions justify-center gap-5 my-5">
                            <a href="https://wireehouse.web.app/"><button class="btn btn-primary text-white b">Live Site</button></a>
                            <a href="https://github.com/nafeescse/Bike-warehouse-with-React"><button class="btn btn-primary text-white">Github</button></a>

                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl shadow-secondary">
                    <figure  className='transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-125 duration-500'><img className='h-[200px] w-full overflow-y-auto  m-1 rounded-t-2xl' src={project4} alt="Album" /></figure>
                    <div class="py-3 text-center">
                        <h2 class="text-2xl font-bold text-center">Tuition-e</h2>
                        <p className='text-center'>Online Tuition and Tutor Management Website</p>
                        <div class="card-actions justify-center gap-5 my-5">
                            <a href="https://tuition-e-9338c.web.app/"><button class="btn btn-primary text-white b">Live Site</button></a>
                            <a href="https://github.com/nafeescse/Tuition-e-MERN-stack-clientside-"><button class="btn btn-primary text-white">Github</button></a>


                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl shadow-secondary">
                    <figure  className='transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-125 duration-500'><img className='h-[200px] w-full overflow-y-auto  m-1 rounded-t-2xl' src={project5} alt="Album" /></figure>
                    <div class="py-3 text-center">
                        <h2 class="text-2xl font-bold text-center">Auto-Car</h2>
                        <p className='text-center'>Car & Bike accessories Wholesale Website</p>
                        <div class="card-actions justify-center gap-5 my-5">
                            <a href="https://autocar-ba11b.web.app/"><button class="btn btn-primary text-white b">Live Site</button></a>
                            <a href="https://github.com/nafeescse/tools-factory-MERN-stack-Client-"><button class="btn btn-primary text-white">Github</button></a>
                        </div>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl shadow-secondary">
                    <figure  className='transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-125 duration-500'><img className='h-[200px] w-full overflow-y-auto  m-1 rounded-t-2xl' src={project2} alt="Album" /></figure>
                    <div class="py-3 text-center">
                        <h2 class="text-2xl font-bold text-center">Hillview </h2>
                        <p className='text-center'>Convention Hall Management Website</p>
                        <div class="card-actions justify-center gap-5 my-5">
                            <a href="https://hillview-convention-nafees.netlify.app/"><button class="btn text-white btn-primary">Live Site</button></a>
                            <a href="https://github.com/nafeescse/responsive-landing-page-with-bootstrap"><button class="btn btn-primary text-white">Github</button></a>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl shadow-secondary">
                    <figure  className='transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-125 duration-500'><img className='h-[200px] w-full overflow-y-auto  m-1 rounded-t-2xl' src={project3} alt="Album" /></figure>
                    <div class="py-3 text-center">
                        <h2 class="text-2xl font-bold text-center">Teach Me</h2>
                        <p className='text-center'>Online Course Resource Website</p>
                        <div class="card-actions justify-center gap-5 my-5">
                            <a href="https://teachme-75070.web.app/"><button class="btn btn-primary text-white b">Live Site</button></a>
                            <a href="https://github.com/nafeescse/udemy-clone-with-react"><button class="btn btn-primary text-white">Github</button></a>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl shadow-secondary">
                    <figure  className='transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-125 duration-500'><img className='h-[200px] w-full overflow-y-auto  m-1 rounded-t-2xl' src={project6} alt="Album" /></figure>
                    <div class="py-3 text-center">
                        <h2 class="text-2xl font-bold text-center">Portfolio</h2>
                        <p className='text-center'>My Personal Portfolio Website</p>
                        <div class="card-actions justify-center gap-5 my-5">
                            <a href="https://devnafees.netlify.app/"><button class="btn btn-primary text-white b">Live Site</button></a>
                            <a href="https://github.com/nafeescse/mern-portfolio"><button class="btn btn-primary text-white">Github</button></a>
                        </div>
                    </div>
                </div> */}