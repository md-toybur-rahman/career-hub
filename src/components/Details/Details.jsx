import React from 'react';
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Details = () => {
    return (
        <div className=''>
            <div className='bg-gradient-to-r from-indigo-50 to-purple-50 relative -top-[100px] -z-10 h-[400px]'>
                <img className='absolute bottom-0' src="../../../public/images/Vector.png" alt="" />
                <img className='absolute right-0' src="../../../public/images/Vector2.png" alt="" />
                <h1 className='text-center text-5xl font-semibold py-[200px]'>Job Details</h1>
            </div>
            <div>
                <div>
                    <p><span>Job Description: </span> {description}</p>
                    <p><span>Job Responsibility: </span> {responsibility}</p>
                    <p><span>Educational Requirements: </span> <br /> {education}</p>
                    <p><span>Experiences: </span> <br /> {experiences}</p>
                </div>
                <div>
                    <div>
                        <h3>Job Details</h3>
                        <hr />
                        <p><CurrencyDollarIcon className='h-5 w-5'></CurrencyDollarIcon> <span>Salary: </span> {salary} (Per Month)</p>
                        <p><CalendarDaysIcon className='h-5 w-5'></CalendarDaysIcon> <span>Job Title: </span>{title}</p>\

                        <h3>Contact Information</h3>
                        <hr />
                        <p><PhoneIcon className='h-5 w-5'></PhoneIcon> <span>Phone: </span>{phone}</p>
                        <p><EnvelopeIcon className='h-5 w-5'></EnvelopeIcon> <span>Email: </span>{email}</p>
                        <p><MapPinIcon className='h-5 w-5'></MapPinIcon> <span>Address: </span>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;