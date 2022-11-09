import React from 'react';

const Talk = () => {
    return (
        <section className="bg-gray-100 text-gray-800 ">
            <div className="container max-w-xl p-6 py-12 mt-24 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Photography is my Deed.</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">I love to shoot Photo.</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">My job is to catch every second</h3>
                        <p className="mt-3 text-lg text-gray-600">You're about to throw the most epic party for your friends and family? I will be your ride or die. My job is to catch every second, so you and your loved ones can just let go and live in the moment. You feel like we could vibe? Leave us a message and let’s get this party started.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-gray-900">Your true best friend</h4>
                                    <p className="mt-2 text-gray-600">There’s nothing more incredible than finding the one person you can’t live without. Your true best friend.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-gray-900">I want to capture the true versions of you two.</h4>
                                    <p className="mt-2 text-gray-600">I want to photograph this connection. Whether we adventure somewhere beautiful together or explore the intimacy of your own home, I want to capture the true versions of you two.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-gray-900">Let’s create something real.</h4>
                                    <p className="mt-2 text-gray-600">Don’t hold back. You only get this moment once. You be you, I’ll be me. Let’s create something real.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src="https://images.pexels.com/photos/2507829/pexels-photo-2507829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className=" mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Talk;