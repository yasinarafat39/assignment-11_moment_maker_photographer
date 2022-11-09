import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from '../Home/Services/SingleService';

const AllService = () => {
    const services = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 m-8'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default AllService;