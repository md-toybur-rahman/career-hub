import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isIconActive, setIsIconActive] = useState(false);
    const iconHandler = () => {
        setIsIconActive(!isIconActive);
    }
    return (
        <nav className={`flex items-center justify-between py-5 px-[50px] ${isIconActive ? 'relative' : ''}`}>
            <Link to='/'><h1 className='font-extrabold text-center md:text-4xl text-3xl px-5 md:px-0 pl-0'>Job <span className='text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-500'>H</span>unter</h1></Link>
            <button onClick={() => iconHandler()} className='md:hidden py-2'><Bars3Icon className='w-5 h-5 text-lg'></Bars3Icon></button>
            <div className={`md:flex gap-3 md:gap-8 ${isIconActive ? ' bg-purple-200 flex px-12 py-2 justify-center rounded-lg absolute duration-500 top-[70px] left-[54px] right-[54px]' : 'duration-500 bg-purple-200 md:bg-transparent px-12 py-2 rounded-lg absolute md:static top-[70px] -left-96'}`}>

                <NavLink className={({ isActive }) => isActive ? 'font-semibold text-transparent text-base bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500' : 'font-semibold text-base'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-semibold text-transparent text-base bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500' : 'font-semibold text-base'} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-semibold text-transparent text-base bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500' : 'font-semibold text-base'} to='/applied'>Applied Jobs</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-semibold text-transparent text-base bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500' : 'font-semibold text-base'} to='/blog'>Blog</NavLink>
            </div>
            <button className='md:block hidden'>Start Applying</button>
        </nav>
    );
};

export default Header;