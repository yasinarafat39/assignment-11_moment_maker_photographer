import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
    const { reviewMessage, serviceName, userName, userPhoto } = review;
    return (
        <section className="reviews mb-8">
            <div className="container flex flex-col     p-6   divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
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

                </div>
                <div className="p-4 space-y-2 text-sm text-gray-600">
                    <p>{reviewMessage}</p>
                </div>
            </div>
        </section>
    );
};

export default Review;