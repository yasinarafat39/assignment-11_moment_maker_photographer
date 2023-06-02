import React from 'react';
import Banner from './Banner/Banner';
import CameraSection from './CameraSection/CameraSection';
import Services from './Services/Services';
import Talk from './Talk/Talk';
import Gallery from './Gallery/Gallery';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <Services></Services>
            <CameraSection></CameraSection>
            <Talk></Talk>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;