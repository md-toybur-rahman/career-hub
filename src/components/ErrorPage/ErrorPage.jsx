import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='h-[100vh] flex flex-col items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-7xl'>Oops!!!</h1>
                <p className='text-3xl my-5'>Sorry, an unexpected error has occurred</p>
                <p className='mb-5'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'><button>Back to Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;