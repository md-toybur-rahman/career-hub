import React, { useEffect, useState } from 'react';
import categories from '../../../public/categories.json'
import featured from '../../../public/featured.json'
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

const Home = () => {
    // const [category, setCategory] = useState([]);
    // useEffect(() => {

    // }, []) 
    return (
        <body className='px-[50px]'>
            {/* ============= Banner Section =========== */}
            <section className='mt-5 mb-10 md:grid md:grid-cols-2 items-center gap-5 text-center flex flex-col-reverse'>
                <div>
                    <h1 className='text-5xl md:text-7xl font-bold leading-[50px] md:leading-[85px]'>One Step <br /> Closer To Your <br /> <span className='text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-500'>Dream Job</span></h1>
                    <p className='mt-5 mb-7 text-lg text-[#757575]'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <img src="/public/images/profile.png" alt="" />
            </section>
            {/* ============= End Banner Section =========== */}

            {/* ============= Category Section =========== */}
            <section className='mt-28'>
                <h1 className='font-bold text-5xl text-center mb-5'>Job Category List</h1>
                <p className='text-center text-lg text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex gap-5 justify-center flex-col items-center md:flex-row mt-10'>
                    {
                        categories.map(item => <Category key={item.id} category={item}></Category>)
                    }
                </div>
            </section>
            {/* ============= End Category Section =========== */}

            {/* ============= Featured Section =========== */}
            <section className='mt-28'>
                <h1 className='font-bold text-5xl text-center mb-5'>Featured Jobs</h1>
                <p className='text-center text-lg text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 items-center justify-center gap-5 mt-10'>
                    {
                        featured.map(feature => <Featured key={feature.id} feature={feature}></Featured>)
                    }
                </div>
                <div className='text-center'>
                    <button className='mt-10'>See All Jobs</button>
                </div>
            </section>
            {/* ============= End Featured Section =========== */}

        </body>
    );
};

export default Home;