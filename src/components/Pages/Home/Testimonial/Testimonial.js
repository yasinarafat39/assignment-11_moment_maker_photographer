import React from 'react';

const Testimonial = () => {


    const testimonialItems = [
        {
            id: "slide1",
            clientPicture: "https://i.ibb.co/DQGqdCv/Munzereen-profile.jpg",
            clientName: "Munzereen Sohid",
            leftSlide: "#slide4",
            rightSlide: "#slide2",
            description: "If you're looking for a photographer who can bring your vision to life, look no further. This photographer has a unique ability to understand and translate ideas into breathtaking images. The attention to detail and exceptional composition in their work is simply outstanding. I'm thrilled with the results!"
        },

        {
            id: "slide2",
            clientPicture: "https://i.ibb.co/7Ryys8P/purnima-profile.jpg",
            clientName: "Purnima",
            leftSlide: "#slide1",
            rightSlide: "#slide3",
            description: "I couldn't be happier with the photography service provided by this talented photographer. They effortlessly captured the emotions and atmosphere of our special occasion. Their professionalism and creativity shine through in every shot. Truly remarkable work!"
        },
        {
            id: "slide3",
            clientPicture: "https://i.ibb.co/SwSDJVS/model-02.jpg",
            clientName: "Adam",
            leftSlide: "#slide2",
            rightSlide: "#slide4",
            description: "Choosing this photographer was the best decision I made for my event. Their expertise and passion for photography are evident in every frame. They made everyone feel comfortable, resulting in stunning, candid shots that perfectly encapsulate the essence of the day. Highly recommended!"
        },
        {
            id: "slide4",
            clientPicture: "https://i.ibb.co/NmC6Sht/model-01.jpg",
            clientName: "John Doe",
            leftSlide: "#slide3",
            rightSlide: "#slide1",
            description: "Working with this photographer was an absolute delight! They captured the essence of every moment beautifully, with a keen eye for detail. The final results exceeded my expectations. Highly recommend their exceptional photography skills!"
        },

    ]



    return (
        <div className='mt-16 m-4 md:m-0 lg:m-0'>
            <h2 className='text-[2em] md:text-[3em] text-center font-semibold mb-16'>What our customers are saying about us</h2>
            <div className="carousel w-full">


                {
                    testimonialItems.map(item => <div
                        key={item.id}
                        id={item.id}
                        className="carousel-item relative w-full flex justify-center items-center flex-col "

                    >

                        <img src={item.clientPicture} alt='client' className='w-[150px] rounded-full mb-6' />
                        <h3 className='text-3xl font-semibold text-green-600 mb-8'>{item.clientName}</h3>
                        <p className='w-80% md:w-3/4 lg:w-2/4 mx-auto text-center text-[1em] md:text-[1.5em]'>{item.description}</p>

                        <div className="absolute flex justify-between transform -translate-y-1/2  left-0  right-0 md:left-4 md:right-4 lg:left-0 lg:right-0 top-1/2">
                            <a href={item.leftSlide} className="btn btn-circle opacity-30">❮</a>
                            <a href={item.rightSlide} className="btn btn-circle opacity-30">❯</a>
                        </div>

                    </div>)
                }


            </div>
        </div>
    );
};

export default Testimonial;