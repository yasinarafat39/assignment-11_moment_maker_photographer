import React from 'react';
import photo from './Creative-Photographer.jpg';

const CreativePhotographer = () => {
    return (
        <section className='grid md:grid-cols-2 gap-14 w-5/6 mx-auto my-16'>
            <div className='border-4 md:border-8  border-gray-300'>
                <img src={photo} className=' relative -top-6 md:-top-0 md:-right-10 px-4 md:px-0 md:py-8' alt="" />
            </div>

            <div className=' '>
                <h2 className='text-[2em] font-semibold'>Find creative photographer who can capture your sec.</h2>
                <p className='my-8'>Discover a skilled and imaginative photographer who will artistically document your most treasured memories.</p>
                <p>With their unique vision and expertise, they will ensure that every second is beautifully preserved for you to cherish forever.</p>
            </div>
        </section>
    );
};

export default CreativePhotographer;

