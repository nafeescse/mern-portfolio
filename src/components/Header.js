import React from 'react';

const Header = () => {
    return (
        <div className="navbar sticky z-50 top-0 bg-secondary flex justify-start lg:justify-center">
            <div className="dropdown ">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 active:border-b-2 ">
                <li><a className='hover:font-bold hover:border' href='/#hero'>Home</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/#about'>About Me</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/#skills'>Skills</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/#projects'>Projects</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/blogs'>Blogs</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/#contacts'>Contact Me</a></li>
                </ul>
            </div>

            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-primary">
                    <li><a className='hover:font-bold hover:border' href='/#hero'>Home</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/#about'>About Me</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/#skills'>Skills</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/#projects'>Projects</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/blogs'>Blogs</a></li>
                    <li><a className='hover:font-bold hover:border-b-2' href='/#contacts'>Contact Me</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;