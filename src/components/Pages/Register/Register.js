import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { user, register } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">Please Register to add your review in my services. After Register you will enjoy my additional feature.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label" htmlFor='user-name'>
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" id='user-name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='user-email'>
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" id='user-email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='password'>
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" id='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;