/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar sticky z-50 top-0 bg-secondary flex justify-start lg:justify-center">
            <div className="dropdown ">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                    <li><a href='#hero'>Home</a></li>
                    <li><a href='#about'>About Me</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contacts'>Contact Me</a></li>
                </ul>
            </div>

            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-primary">
                    <li><a href='#hero'>Home</a></li>
                    <li><a href='#about'>About Me</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contacts'>Contact Me</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;