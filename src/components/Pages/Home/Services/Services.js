import { data } from 'autoprefixer';
import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData();
    console.log(services);


    const handleViewAllServices = () => {

        fetch('https://moment-maker-photographer-server.vercel.app/services/all')
            .then(res => res.json())
            .then(data => console.log(data))


    }

    return (
        <div className='m-6'>

            <div className='mb-12'>
                <h2 className='text-5xl mb-4 font-semibold text-center text-green-600'>Services</h2>
                <p className='text-center text-green-800'>This is my Photography services.</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>

            <div className='text-center mt-20'>
                <Link to="/services/all"><button onClick={handleViewAllServices} className="btn btn-outline btn-success ">View All Services</button></Link>
            </div>
        </div>
    );
};

export default Services; 