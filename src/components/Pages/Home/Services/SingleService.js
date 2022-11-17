import React from 'react';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';




const SingleService = ({ service }) => {
    const { _id, img, description, price, serviceName } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">

            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <PhotoView src={img} >
                    <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description.slice(0, 100) + "..."}</p>
                <h3 className='text-center text-3xl font-bold text-gray-700 mb-3'>Price: ${price}</h3>
                <div className="card-actions justify-center">
                    <Link to={`/services/${_id}`}><button className="btn bg-green-700 border-none">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;