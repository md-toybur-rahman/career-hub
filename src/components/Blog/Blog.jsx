import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-indigo-50 to-purple-50 relative -top-[100px] -z-10 h-[400px]'>
                <img className='absolute bottom-0' src="../../../public/images/Vector.png" alt="" />
                <img className='absolute right-0' src="../../../public/images/Vector2.png" alt="" />
                <h1 className='text-center text-5xl font-semibold py-[200px]'>Blog</h1>
            </div>
            <div className='px-[50px] grid gap-6'>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold'>Question-01: When should you use Context Api?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> Give your Answers</p>
                </div>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold'>Question-01: When should you use Context Api?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> Give your Answers</p>
                </div>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold'>Question-01: When should you use Context Api?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> Give your Answers</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;