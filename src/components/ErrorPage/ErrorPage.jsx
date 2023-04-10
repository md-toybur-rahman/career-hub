import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='h-[100vh] flex flex-col items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-7xl'>Oops!!!</h1>
                <p className='my-8 flex flex-col items-center justify-center gap-2 text-red-500'>
                    <i className='text-3xl font-bold mt-3'>{error.status}</i>
                    <i className='text-3xl'>{error.statusText || error.message}</i>
                </p>
                <p className='text-3xl mb-8'>Sorry, an unexpected error has occurred</p>
                <Link to='/'><button>Back to Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;