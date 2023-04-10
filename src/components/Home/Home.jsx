import React from 'react';

const Home = () => {
    return (
        <div className='mt-5 md:grid md:grid-cols-2 items-center gap-5 text-center flex flex-col-reverse'>
            <div>
                <h1 className='text-5xl md:text-7xl font-bold leading-[50px] md:leading-[85px]'>One Step <br /> Closer To Your <br /> <span className='text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-500'>Dream Job</span></h1>
                <p className='mt-5 mb-7 text-lg text-[#757575]'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
            <img src="/profile.png" alt="" />
        </div>
    );
};

export default Home;