import React from 'react';

const Testimonial = () => {


    const testimonialItems = [
        {
            id: "slide1",
            clientPicture: "https://i.ibb.co/DQGqdCv/Munzereen-profile.jpg",
            leftSlide: "#slide4",
            rightSlide: "#slide2",
            description: "If you're looking for a photographer who can bring your vision to life, look no further. This photographer has a unique ability to understand and translate ideas into breathtaking images. The attention to detail and exceptional composition in their work is simply outstanding. I'm thrilled with the results!"
        },

        {
            id: "slide2",
            clientPicture: "https://i.ibb.co/7Ryys8P/purnima-profile.jpg",
            leftSlide: "#slide1",
            rightSlide: "#slide3",
            description: "I couldn't be happier with the photography service provided by this talented photographer. They effortlessly captured the emotions and atmosphere of our special occasion. Their professionalism and creativity shine through in every shot. Truly remarkable work!"
        },
        {
            id: "slide3",
            clientPicture: "https://i.ibb.co/SwSDJVS/model-02.jpg",
            leftSlide: "#slide2",
            rightSlide: "#slide4",
            description: "Choosing this photographer was the best decision I made for my event. Their expertise and passion for photography are evident in every frame. They made everyone feel comfortable, resulting in stunning, candid shots that perfectly encapsulate the essence of the day. Highly recommended!"
        },
        {
            id: "slide4",
            clientPicture: "https://i.ibb.co/NmC6Sht/model-01.jpg",
            leftSlide: "#slide3",
            rightSlide: "#slide1",
            description: "Working with this photographer was an absolute delight! They captured the essence of every moment beautifully, with a keen eye for detail. The final results exceeded my expectations. Highly recommend their exceptional photography skills!"
        },

    ]



    return (
        <div className='mt-16'>
            <h2 className='text-[3em] text-center font-semibold mb-16'>What our customers are saying about us</h2>
            <div className="carousel w-full">


                {
                    testimonialItems.map(item => <div
                        key={item.id}
                        id={item.id}
                        className="carousel-item relative w-full flex justify-center items-center flex-col"

                    >

                        <img src={item.clientPicture} alt='client' className='w-[150px] rounded-full mb-6' />

                        <p className='w-2/4 mx-auto text-center text-[1.5em]'>{item.description}</p>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={item.leftSlide} className="btn btn-circle">❮</a>
                            <a href={item.rightSlide} className="btn btn-circle">❯</a>
                        </div>

                    </div>)
                }


            </div>
        </div>
    );
};

export default Testimonial;