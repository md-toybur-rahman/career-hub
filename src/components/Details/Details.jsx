import React from 'react';
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb } from '../../../utilities/fakedb';
// import featured from '../../../public/featured.json'

const Details = () => {
    console.log(window.scrollY)
    const featured = useLoaderData();
    const getId = localStorage.getItem('details');
    const feature = featured.find(item => item.id === getId);
    const {description, responsibility, experiences, salary, title, phone, email, address, education, picture, company, id }= feature;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const applyHandler = (setId) => {
        addToDb(setId)
    }
    return (
        <div>
            <div className='bg-gradient-to-r from-indigo-50 to-purple-50 relative -top-[100px] -z-10 h-[400px]'>
                <img className='absolute bottom-0' src="../../../public/images/Vector.png" alt="" />
                <img className='absolute right-0' src="../../../public/images/Vector2.png" alt="" />
                <h1 className='text-center text-5xl font-semibold py-[200px]'>Job Details</h1>
            </div>
            <div className='flex items-center justify-center flex-col px-[50px]'>
                <img src={picture} alt="" />
                <h2 className='mt-3 font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-500'>{company}</h2>
            </div>
            <hr className='mt-5 border-indigo-200 mx-[50px]' />
            <div className='px-[50px] grid md:grid-cols-3 gap-10 mt-10'>
                <div className='md:col-span-2'>
                    <p className='text-base mb-6 leading-7'><span className='font-bold'>Job Description: </span> {description}</p>
                    <p className='text-base mb-6 leading-7'><span className='font-bold'>Job Responsibility: </span> {responsibility}</p>
                    <p className='text-base mb-6'><span className='font-bold leading-10'>Educational Requirements: </span> <br /> {education}</p>
                    <p className='text-base mb-6'><span className='font-bold leading-10'>Experiences: </span> <br /> {experiences}</p>
                </div>
                <div>
                    <div className='p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg'>
                        <h3 className='font-bold text-xl mb-5'>Job Details</h3>
                        <hr className='border-indigo-200' />
                        <p className='flex items-center gap-3 my-3'><CurrencyDollarIcon className='h-5 w-5'></CurrencyDollarIcon> <span className='font-bold'>Salary: </span> {salary} (Per Month)</p>
                        <p className='flex items-center gap-3'><CalendarDaysIcon className='h-5 w-5'></CalendarDaysIcon> <span className='font-bold'>Job Title: </span>{title}</p>

                        <h3 className='font-bold text-xl mb-5 mt-5'>Contact Information</h3>
                        <hr className='border-indigo-200' />
                        <p className='flex items-center gap-3 mt-3'><PhoneIcon className='h-5 w-5 '></PhoneIcon> <span className='font-bold'>Phone: </span>{phone}</p>
                        <p className='flex items-center gap-3 my-3'><EnvelopeIcon className='h-5 w-5'></EnvelopeIcon> <span className='font-bold'>Email: </span>{email}</p>
                        <p className='flex  gap-3'><MapPinIcon className='h-5 w-5'></MapPinIcon> <span className='font-bold'>Address: </span>{address}</p>
                    </div>
                    <button onClick={() => applyHandler(id)} className='mt-5 w-full'>Apply Now</button>
                    <Link to='/'><button className='mt-5 w-full'>Back to Home Page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Details;