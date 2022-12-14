import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MySingleReview from './MySingleReview';



const MyReview = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://moment-maker-photographer-server.vercel.app/reviews/current?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Photography-Token')}`
            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    logOut()
                }

                return res.json()
            })
            .then(data => setReviews(data))

    }, [user?.email])


    // handle Delete that you Review
    const handleDeleteReview = _id => {
        const proceed = window.confirm("Are you sure? You want to Delete this review.");
        if (proceed) {
            fetch(`https://moment-maker-photographer-server.vercel.app/reviews/${_id}`, {
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


    // handle Update user Review
    const handleUpdateReview = _id => {
        fetch(`https://moment-maker-photographer-server.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reviews })
        })
    }



    return (
        <div className='max-w-screen-xl mx-auto'>

            {
                reviews ?

                    <>
                        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-4 mt-12'>
                            {
                                reviews.map(review => <MySingleReview
                                    key={review._id}
                                    review={review}
                                    handleDeleteReview={handleDeleteReview}
                                ></MySingleReview>)
                            }
                        </section>
                    </>
                    :
                    <>
                        <h2 className='text-gray-600 text-2xl font-bold text-center my-28'>You Have No Review</h2>
                    </>

            }


        </div>
    );
};

export default MyReview;