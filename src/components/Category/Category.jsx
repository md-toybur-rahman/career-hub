import React from 'react';

const Category = ({ category }) => {
    const { picture, name, job } = category;
    return (
        <div className='w-[310px] h-[240px] p-[40px] rounded-lg bg-gray-200'>
            <div className='p-4 mb-8'>
                <img src={picture} alt="" />
            </div>
            <div>
                <h1 className='mb-2 font-bold text-xl'>{name}</h1>
                <p className='text-base text-[#757575]'>{job} Jobs Available</p>
            </div>
        </div>
    );
};

export default Category;