import React from 'react';

const Banner = ({name}) => {
    return (
        <div>
            <div className='bg-gradient-to-r from-indigo-50 to-purple-50 relative -top-[100px] -z-10 h-[400px]'>
                <img className='absolute bottom-0' src="https://i.ibb.co/bRZsrwn/Vector.png" alt="" />
                <img className='absolute right-0' src="https://i.ibb.co/4ZBwNfm/Vector2.png" alt="" />
                <h1 className='text-center text-5xl font-semibold py-[200px]'>{name}</h1>
            </div>
        </div>
    );
};

export default Banner;