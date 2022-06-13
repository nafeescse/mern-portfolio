import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.css';
// import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className="navbar sticky z-50 top-0 bg-secondary flex justify-start lg:justify-center">
            <div className="dropdown ">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 active:border-b-2 ">
                    <li><NavHashLink className='active-link focus:text-error' to='/#hero'>Home</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/#about'>About</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/#skills'>Skills</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/#projects'>Projects</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/blogs'>Blogs</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/#contacts'>Contact</NavHashLink></li>
                </ul>
            </div>

            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-primary">
                    <li><NavHashLink className='active-link focus:text-error' to='/#hero'>Home</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/#about'>About</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/#skills'>Skills</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/#projects'>Projects</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/blogs'>Blogs</NavHashLink></li>
                    <li><NavHashLink className='active-link focus:text-error' to='/#contacts'>Contacts</NavHashLink></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;