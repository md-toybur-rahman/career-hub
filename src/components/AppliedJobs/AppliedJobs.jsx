import React from 'react';

const AppliedJobs = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    return (
        <div>
            <div className='bg-gradient-to-r from-indigo-50 to-purple-50 relative -top-[100px] -z-10 h-[400px]'>
                <img className='absolute bottom-0' src="../../../public/images/Vector.png" alt="" />
                <img className='absolute right-0' src="../../../public/images/Vector2.png" alt="" />
                <h1 className='text-center text-5xl font-semibold py-[200px]'>Applied Jobs</h1>
            </div>
            <div className='px-[50px] gap-10 mt-10'>

            </div>
        </div>
    );
};

export default AppliedJobs;