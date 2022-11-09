import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createNewUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);

        createNewUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
                handleUpdateUserProfile(name, photoURL)

            })
            .catch(err => {
                setError(err);
                console.error(err);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => {
                setError('')
                console.log('User updated');
            })
            .catch(error => {
                setError(error);
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">Please Register to add your review in my services. After Register you will enjoy my additional feature.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label" htmlFor='user-name'>
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" id='user-name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor='photoURL'>
                                <span className="label-text">Profile Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Profile Photo URL" id='photoURL' className="input input-bordered" required />
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
                            <input type="password" name='password' placeholder="password" id='password' className="input input-bordered" required />
                        </div>
                        {
                            error && <p className='text-red'>{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                            <a rel="noopener noreferrer" href="/login" className="underline text-gray-800"> Log in</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;