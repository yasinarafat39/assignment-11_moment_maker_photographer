import React from 'react';
import toast from 'react-hot-toast';


const AddService = () => {


    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const imageURL = form.imageURL.value;
        const price = form.price.value;
        const serviceDescription = form.serviceDescription.value;

        const service = {
            serviceName: serviceName,
            img: imageURL,
            price: price,
            description: serviceDescription
        }

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added Successfully!')
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }

    return (

        <div className='flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
                <h1 className="text-2xl font-bold text-center text-green-600">Add New Service</h1>
                <form onSubmit={handleAddService} className="space-y-6 ng-untouched ng-pristine ng-valid">

                    <div className="form-control">
                        <label className="label" htmlFor='serviceName'>
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='serviceName' id='serviceName' placeholder="What's your Service Name?" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='imageURL'>
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name='imageURL' id='imageURL' placeholder="Image URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='price'>
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' id='price' placeholder="Price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label" htmlFor='service description'>
                            <span className="label-text">Service Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" name='serviceDescription' id='service description' placeholder="Type Service Description" required></textarea>

                    </div>

                    <button type='submit' className="block w-full p-3 text-center rounded-sm btn">Add Service</button>
                </form>
            </div>
        </div>

    );
};

export default AddService;