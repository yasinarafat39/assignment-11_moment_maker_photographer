import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import Review from '../../shared/Review/Review';


const ServiceDetailsPage = () => {

    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const { _id, img, description, price, serviceName } = service;



    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewMessage = form.reviewMessage.value;


        const review = {
            serviceId: _id,
            serviceName: serviceName,
            userPhoto: user.photoURL,
            userName: user.displayName,
            email: user.email,
            reviewMessage: reviewMessage
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Add Successfully!')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <div className=' '>
            <section id='service-details-section' className='max-w-screen-xl lg:w-3/4 lg:mx-auto md:m-8 m-4' >
                <h1 className=' text-center text-3xl text-gray-800 font-semibold'>You Can See {serviceName} Service Details.</h1>
                <img src={img} alt={serviceName} className='mt-16' />
                <p className='flex justify-between items-center mt-3'>
                    <Link to="/services/all" className='flex items-center justify-start  text-green-600 hover:underline'> <FaAngleLeft /> &nbsp; <span>See All Service</span></Link>
                    <h3 className='text-2xl font-semibold text-green-600'>Service Price: ${price}</h3>
                </p>
                <h2 className='text-center text-3xl font-mono font-bold mt-6'>{serviceName} Photography</h2>
                <h2 className='text-2xl font-semibold text-green-600 mt-9'>About This Service:</h2>
                <p className='mt-3'>{description}</p>
                <p></p>
            </section>

            <h3 className='text-center text-3xl font-semibold font-mono text-green-600 mt-20'>All Review</h3>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-4 mt-12'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </section>
            



            {
                user?.email ?
                    <section className='lg:mx-48 md:m-16 m-4'>
                        <h4 className='text-xl font-bold'>Add a review :</h4>
                        <form onSubmit={handleSubmitReview}>
                            <input type="text" name="" id="" />
                            <textarea name="reviewMessage" className="textarea textarea-bordered h-24  w-full  " placeholder="Write your review" required></textarea>
                            <input className='btn' type="submit" value="Add Review" />
                        </form>
                    </section>
                    :
                    <div className='text-center'>
                        <h3 className='text-xl font-bold'>Please login to add a review.</h3>
                        <Link to="/login" className="btn btn-success mt-3">Log in</Link>
                    </div>

            }
        </div>
    );
};

export default ServiceDetailsPage;