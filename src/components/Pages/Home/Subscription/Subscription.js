import React from 'react';
import subscriptionPhoto from './subcriptionFor.jpg';


const Subscription = () => {
    return (
        <section className=" flex justify-center items-center bg-cover bg-no-repeat h-80 my-28" style={{ backgroundImage: `url(${subscriptionPhoto})` }}>
            <div className=''>
                <h1 className='text-[2em] md:text-[2.5em] font-bold text-white text-center pb-4'>Subscribe for the latest discount</h1>
                <p className='flex justify-center'>
                    <input type="email" name='email' placeholder='E-mail' className='p-4 w-3/5   rounded-l focus:outline-none  ' required />
                    <button type='submit' className='bg-green-500 py-4 px-8 font-semibold text-white rounded-r '>Subscribe</button>
                </p>
            </div>
        </section>



    );
};

export default Subscription;