import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-indigo-50 to-purple-50 relative -top-[100px] -z-10 h-[400px]'>
                <img className='absolute bottom-0' src="https://i.ibb.co/bRZsrwn/Vector.png" alt="" />
                <img className='absolute right-0' src="https://i.ibb.co/4ZBwNfm/Vector2.png" alt="" />
                <h1 className='text-center text-5xl font-semibold py-[200px]'>Blog</h1>
            </div>
            <div className='px-[50px] grid gap-6'>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold mb-3'>Question-01: When should you use Context Api?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> We usually use props to pass data from one component to another, which is called props drilling. But when we have to drill very deep, we have to repeat the code. Context Api is used as a solution to this code repetition. By using Context Api, data can be easily sent from the Parent component to any child component within it.</p>
                </div>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold mb-3'>Question-02: What is Custom Hook?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> Give your Answers</p>
                </div>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold mb-3'>Question-03: What is useRef and what the purpose of useRef Hook?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> Give your Answers</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;