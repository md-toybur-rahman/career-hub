import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid'
const Header = () => {
    return (
        <nav className='flex items-center justify-between py-5'>
            <Link to='/'><h1 className='font-extrabold text-center md:text-4xl text-2xl px-5 md:px-0 pl-0'>Job <span className='text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-500'>H</span>unter</h1></Link>
            <div className='hidden md:flex gap-8'>
                <NavLink className={({ isActive }) => isActive ? 'font-semibold text-transparent text-base bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500' : 'font-semibold text-base'} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-semibold text-transparent text-base bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500' : 'font-semibold text-base'} to='/applied'>Applied Jobs</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-semibold text-transparent text-base bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500' : 'font-semibold text-base'} to='/blog'>Blog</NavLink>
            </div>
            <button className='md:hidden'><Bars3Icon className='w-5 h-5 text-lg'></Bars3Icon></button>
            <button className='md:block hidden'>Start Applying</button>
        </nav>
    );
};

export default Header;