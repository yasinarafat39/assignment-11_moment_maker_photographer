import React from 'react';
import afterNon from './after-non.jpg'
import warm from './warm.jpg'


const LoveInPhotography = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 lg:p-20 bg-gray-200'>
            <div className='grid gap-6 justify-center translate-x-8 lg:translate-x-18 p-4 '>
                <img src={afterNon} className='w-[25em]  origin-top-left rotate-15 duration-300 hover:rotate-0' alt="" />
                <img src={warm} className='w-[25em]  origin-bottom -rotate-15 duration-300 hover:rotate-0' alt="" />
            </div>

            <div>
                <h1 className='text-[2em] lg:text-5xl font-bold text-green-600 mb-10 mt-14'>Why I fell in Love with photography?</h1>
                <p className='text-2xl mb-5'>because it ignited my passion for capturing the fleeting moments of life, transforming ordinary scenes into extraordinary art. Through the lens, discovered a powerful means of self-expression, a way to share my unique perspective and evoke emotions in others.</p>
                <p className='text-2xl'>It provided a creative outlet for self-expression, allowing me to capture emotions, explore different perspectives, and freeze moments in time, making them immortal and unforgettable.</p>
                <button>WORK WITH ME</button>
            </div>
        </section>
    );
};

export default LoveInPhotography;