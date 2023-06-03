import React from 'react';
import Banner from './Banner/Banner';
import CameraSection from './CameraSection/CameraSection';
import Services from './Services/Services';
import Talk from './Talk/Talk';
import Gallery from './Gallery/Gallery';
import Testimonial from './Testimonial/Testimonial';
import ContactMe from './ContactMe/ContactMe';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <CameraSection></CameraSection>
            <Talk></Talk>
            <Services></Services>
            <Testimonial></Testimonial>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;