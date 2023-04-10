import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const Applied = ({ job }) => {
    const { picture, title, company, jobType, shift, location, salary, id } = job;
    const detailHandler = () => {
        localStorage.setItem('details', id);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    return (
        <div className='p-[30px] rounded-lg border border-purple-300 flex flex-col md:flex-row md:text-left text-center md:flex items-center justify-between'>
            <div className='md:flex items-center gap-5'>
                <div className='md:bg-[#F4F4F4] rounded-lg md:w-[240px] md:h-[240px] flex items-center justify-center'>
                    <img src={picture} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl md-1 mt-5 md:mt-0 mb-3 md:mb-0'>{title}</h1>
                        <p className='text-xl text-[#757575] mb-4'>{company}</p>
                        <div className=' flex flex-col md:flex-row md:flex gap-5 items-center my-5 md:my-0'>
                            <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-[2px]">
                                <div className="flex h-full w-full items-center justify-center bg-white rounded-md back">
                                    <h2 className='text-transparent font-bold bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-500'>{jobType}</h2>
                                </div>
                            </div>
                            <div className="h-12 w-24 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-[2px]">
                                <div className="flex h-full w-full items-center justify-center bg-white rounded-md back">
                                    <h2 className='text-transparent font-bold bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-500'>{shift}</h2>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex gap-5 mt-4 mb-6 items-center'>
                            <p className='flex items-center gap-3 text-xl text-[#757575]'><MapPinIcon className='h-7 w-7 text-gray-400'></MapPinIcon> {location}</p>
                            <p className='flex items-center gap-3 text-xl text-[#757575] mt-5 md:mt-0'><CurrencyDollarIcon className='h-7 w-7 text-gray-400'></CurrencyDollarIcon> Salary : {salary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link to='/details' ><button onClick={() => detailHandler()}>View Details</button></Link>
            </div>
        </div>
    );
};

export default Applied;