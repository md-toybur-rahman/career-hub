import React from 'react';
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, getJobCart } from '../../../utilities/fakedb';
// import featured from '../../../public/featured.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '../Banner/Banner';

const Details = () => {
    const featured = useLoaderData();
    const getId = localStorage.getItem('details');
    const feature = featured.find(item => item.id === getId);
    const { description, responsibility, experiences, salary, title, phone, email, address, education, picture, company, id } = feature;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const applyHandler = (setId) => {
        let cart = [];
        const getItem = getJobCart();
        for (const id in getItem) {
            cart.push(id);
        }
        const exists = cart.find(id => id === setId);
        if (!exists) {
            toast("Apply Done ✅ ");
        }
        else {
            toast("Already Added ❗❗❗")
        }

        addToDb(setId);
    }
    return (
        <div>
            <Banner name="Job Details"></Banner>
            <div className='flex items-center justify-center flex-col px-[50px]'>
                <img src={picture} alt="" />
                <h2 className='mt-3 font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-500'>{company}</h2>
            </div>
            <hr className='mt-5 border-indigo-200 mx-[50px]' />
            <div className='px-[50px] grid md:grid-cols-3 gap-10 mt-10 max-w-[1440px] mx-auto'>
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
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Details;