import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MySingleReview from './MySingleReview';



const MyReview = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/current?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])


    const handleDeleteReview = _id => {
        const proceed = window.confirm("Are you sure? You want to Delete this review.");
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Review Deleted');
                        const remaining = reviews.filter(review => review._id !== _id);
                        setReviews(remaining);
                    }
                })

        }
    }

    return (
        <div>
            <p>You have: {reviews.length}</p>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-4 mt-12'>
                {
                    reviews.map(review => <MySingleReview
                        key={review._id}
                        review={review}
                        handleDeleteReview={handleDeleteReview}
                    ></MySingleReview>)
                }
            </section>
        </div>
    );
};

export default MyReview;