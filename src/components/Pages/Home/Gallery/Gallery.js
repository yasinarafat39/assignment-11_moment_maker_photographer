import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Gallery = () => {


    const images = [
        {
            id: 1,
            img: "https://i.postimg.cc/gkx9JJjq/wedding.jpg"
        },
        {
            id: 2,
            img: "https://i.ibb.co/4RdNbNJ/Munzereen-Sohid.jpg"
        },
        {
            id: 3,
            img: "https://i.ibb.co/GV0K6h9/Purnima.jpg"
        },
        {
            id: 4,
            img: "https://i.ibb.co/cQxRfNv/image.png"
        },
    ]


    return (

        <section className="py-6 bg-gray-100 mt-16">


            <h1 className='text-[3em] font-bold text-center mb-8'>Best Click</h1>

            <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                    {
                        images?.map(image =>

                            <PhotoProvider
                                key={image.id}
                                speed={() => 800}
                                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                            >
                                <PhotoView src={image.img} >
                                    <figure><img className="object-cover w-full bg-gray-500 aspect-square" src={image.img}
                                        alt='Gallery' />
                                    </figure>
                                </PhotoView>
                            </PhotoProvider>
                        )
                    }

                </div>
            </div>
        </section>

    );
};

export default Gallery;