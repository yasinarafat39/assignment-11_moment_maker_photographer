import React from 'react';

const SingleService = ({ service }) => {
    const { _id, img, description, price, serviceName } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description.slice(0, 100) + "..."}</p>
                <h3 className='text-center text-3xl font-bold text-gray-700 mb-3'>Price: ${price}</h3>
                <div className="card-actions justify-center">
                    <button className="btn bg-green-700 border-none">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;