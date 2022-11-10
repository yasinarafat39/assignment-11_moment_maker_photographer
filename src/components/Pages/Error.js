import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

    return (
        <div className='text-center flex items-center justify-center mt-48'>
            <div>
                {
                    error && <>

                        <h3 className='text-8xl font-bold text-gray-800'>{error.status}</h3>
                        <p className='text-3xl font-semibold'>Sorry, an unexpected error has occurred.</p>
                        <p className='text-red-400 text-2xl'>
                            <i>{error.statusText || error.message}</i>
                        </p>
                        <Link
                            to="/"
                            className=" mt-4 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-600 bg-gray-200 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Back to Home
                        </Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Error;