import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

const Blog = () => {
    const scrollHandler = () => {
        window.scrollTo({ top: 0, left: 0, behavior:'smooth'});
    }
    return (
        <div>
            <Banner name="Blog"></Banner>
            <div className='px-[50px] grid gap-6'>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold mb-3'>Question-01: When should you use Context Api?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> We usually use props to pass data from one component to another, which is called props drilling. But when we have to drill very deep, we have to repeat the code. Context Api is used as a solution to this code repetition. By using Context Api, data can be easily sent from the Parent component to any child component within it.</p>
                </div>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold mb-3'>Question-02: What is Custom Hook?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> The hooks that we can create and use outside React's hooks are called Custom Hooks. It is a very powerful hook. Code repetition occurs when the same JavaScrip code is used in different components in React. Then a custom hook is used as a solution. The word 'use' must be used at the beginning of the hook name during creation</p>
                </div>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold mb-3'>Question-03: What is useRef and what the purpose of useRef Hook?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> In JavaScript we use 'document.getElementById', 'document.querySelector' etc. to access the elements of DOM to manipulate the DOM. But doing this in React is not a good practice. React uses a hook called useRef to access elements of the DOM.</p>
                </div>
                <div className='p-[30px] rounded-lg border border-purple-300'>
                    <h1 className='text-xl font-semibold mb-3'>Question-04: What is useMemo and what the purpose of useMemo Hook?</h1>
                    <p className='text-lg'><span className='font-semibold'>Answer: </span> When State is declared in a parent component in React, the entire component is re-rendered. As a result, all child components of that parent component are also re-rendered. A hook called useMemo is used in child components to avoid unnecessary re-renders.</p>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link to='/'><button onClick={() => scrollHandler()}>Back to Home Page</button></Link>
            </div>
        </div>
    );
};

export default Blog;