import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";


const ServiceDetailsPage = () => {

    const service = useLoaderData();

    const { _id, img, description, price, serviceName } = service;

    return (
        <div className='max-w-screen-xl mx-auto'>
            <section id='service-details-section' className='max-w-screen-xl lg:w-2/4 mx-auto'>
                <h1 className=' text-center text-5xl text-gray-800 font-semibold'>You Can See {serviceName} Service Details.</h1>
                <img src={img} alt={serviceName} className='mt-16' />
                <p className='flex justify-between items-center mt-3'>
                    <Link to="/services/all" className='flex items-center justify-start  text-green-600 hover:underline'> <FaAngleLeft /> &nbsp; <span>See All Service</span></Link>
                    <h3 className='text-2xl font-semibold text-green-600'>Service Price: ${price}</h3>
                </p>
                <h2 className='text-center text-3xl font-mono font-bold mt-6'>{serviceName} Service</h2>
                <h2 className='text-2xl font-semibold text-green-600 mt-9'>About {serviceName} Service:</h2>
                <p className='mt-3'>{description}</p>
                <p></p>
            </section>
        </div>
    );
};

export default ServiceDetailsPage;