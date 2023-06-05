import React from 'react';
import Banner from './Banner/Banner';
import CameraSection from './CameraSection/CameraSection';
import Services from './Services/Services';
import Talk from './Talk/Talk';
import Gallery from './Gallery/Gallery';
import Testimonial from './Testimonial/Testimonial';
import ContactMe from './ContactMe/ContactMe';
import LoveInPhotography from './LoveInPhotography/LoveInPhotography';
import CreativePhotographer from './CreativePhotographer/CreativePhotographer';
import Subscription from './Subscription/Subscription';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <LoveInPhotography></LoveInPhotography>
            <CameraSection></CameraSection>
            <Talk></Talk>
            <CreativePhotographer></CreativePhotographer>
            <Services></Services>
            <Subscription></Subscription>
            <Testimonial></Testimonial>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;