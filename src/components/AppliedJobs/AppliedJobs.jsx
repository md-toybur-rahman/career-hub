import React, { useEffect, useState } from 'react';
import { getJobCart } from '../../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import Applied from '../Applied/Applied';
import { deleteJobCart } from '../../../utilities/fakedb';

const AppliedJobs = () => {
    const data = useLoaderData();
    const [jobCart, setJobCart] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        const getJob = getJobCart();
        const newJobCart = [];
        for (const id in getJob) {
            const matched = data.find(item => item.id === id);
            if (matched) {
                newJobCart.push(matched);
            }
        }
        setJobCart(newJobCart)
    }, []);
    const onsiteHandler = () => {
        const onsite = jobCart.filter(job => job.jobType === 'Onsite');
        setJobType(onsite);
        setStatus(true);
    }
    const remoteHandler = () => {
        const remote = jobCart.filter(job => job.jobType === 'Remote');
        setJobType(remote);
        setStatus(true);
    }
    const clearAll = () => {
        deleteJobCart();
        setJobCart([]);
        setJobType([])
    }
    console.log(jobCart)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    return (
        <div>
            <div className='bg-gradient-to-r from-indigo-50 to-purple-50 relative -top-[100px] -z-10 h-[400px]'>
                <img className='absolute bottom-0' src="https://i.ibb.co/bRZsrwn/Vector.png" alt="" />
                <img className='absolute right-0' src="https://i.ibb.co/4ZBwNfm/Vector2.png" alt="" />
                <h1 className='text-center text-5xl font-semibold py-[200px]'>Applied Jobs</h1>
            </div>
            <div className='px-[50px] text-right'>
                <button onClick={() => onsiteHandler()} className={`mr-10 ${!localStorage.getItem('job-cart') ? 'hidden' : ''}`}>Onsite Job</button>
                <button onClick={() => remoteHandler()} className={`mr-10 ${!localStorage.getItem('job-cart') ? 'hidden' : ''}`}>Remote Job</button>
            </div>
            <div className='px-[50px] grid gap-10 mt-10 max-w-[1440px] mx-auto'>
                {
                    status === true
                        ? jobType.map(job => <Applied key={job.id} job={job}></Applied>)
                        : jobCart.map(job => <Applied key={job.id} job={job}></Applied>)
                }
                <div className='flex justify-center'>
                    <button onClick={() => clearAll()} className={`w-40 ${!localStorage.getItem('job-cart') ? 'hidden' : ''}`}>Clear All</button>
                </div>

                <div className={`flex flex-col items-center justify-center ${localStorage.getItem('job-cart') ? 'hidden' : ''}`}>
                    <div className='text-center'>
                        <h1 className='h-24 text-6xl text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-500'>Please Apply for a Job</h1>
                        <Link to='/'><button>Back to Home Page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;