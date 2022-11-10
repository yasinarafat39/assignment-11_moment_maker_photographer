import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MySingleReview = ({ review, handleDeleteReview }) => {

    const { _id, reviewMessage, serviceName, userName, userPhoto } = review;


    return (
        <div>
            <div className="container flex flex-col shadow-lg  p-6   divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <Link to="#"><img src={userPhoto} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" /></Link>
                        </div>
                        <div>
                            <Link to="#"><h4 className="font-bold hover:underline">{userName}</h4></Link>
                            <span className="text-xs text-gray-600">{serviceName}</span>
                        </div>
                    </div>

                    <FaRegEdit className='cursor-pointer'></FaRegEdit>

                    <BsTrash onClick={() => handleDeleteReview(_id)} className='cursor-pointer'></BsTrash>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-600">
                    <p>{reviewMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default MySingleReview;