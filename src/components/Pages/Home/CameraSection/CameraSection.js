import React from 'react';
import Camera from '../../../../assets/camera.jpg';


const CameraSection = () => {
    return (
        <section className="p-4 lg:p-8">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src={Camera} alt="Camera" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-100">
                        <span className="text-xs uppercase text-gray-400">For your shoot</span>
                        <h3 className="text-3xl font-bold">Sony SLT-A77 Mark II (a77 II)</h3>
                        <p className="my-6 text-gray-400">The Sony SLT-A77 Mark II (a77 II) is the company's latest midrange DSLR to use Translucent Mirror Technology.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CameraSection;