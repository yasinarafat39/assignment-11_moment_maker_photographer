import React from 'react';
import bgImage from './contact.jpg';

const ContactMe = () => {
    return (
        <div className='mt-16 drop-shadow-md'>
            <section className=''>
                <img src={bgImage} className='w-full' alt="" />

                <section className=' w-[5/6] mx-[1em] md:mx-[3em]  bg-white p-[0.5em] md:p-[3em]  md:relative  md:-top-24'>
                    
                    <h2 className='text-[2.5em] font-semibold text-center mb-8 text-gray-600'>Contact Me</h2>

                    <label className=' md:flex gap-6'>
                        <input type="text" placeholder="Your Name" className="input input-bordered mb-8 w-full md:w-1/2" />
                        <input type="text" placeholder="Your E-mail" className="input input-bordered w-full md:w-1/2" />

                    </label>
                    <textarea className="textarea textarea-ghost w-full my-5 h-40  border-b-2 border-gray-300" placeholder="Type Message"></textarea>
                    <button className="btn btn-outline btn-success flex mx-auto ">Send Message</button>
                </section>
            </section>



        </div>
    );
};

export default ContactMe;