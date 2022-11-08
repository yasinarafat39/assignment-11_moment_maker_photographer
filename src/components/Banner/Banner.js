import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <section>
            <div className="hero " style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">Hello I'm <span className='text-green-700'>YASIN ARAFAT</span> Photographer</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">You want to hire a Professional Photographer for your event? You can hire me as a Photographer to handle your event</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 hover:bg-gray-800  hover:text-gray-50 transition text-gray-900">Learn more</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Banner;