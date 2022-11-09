import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createNewUser, updateUserProfile, LogInWithGoogle } = useContext(AuthContext);
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

    // Google Login
    const handleGoogleLogin = () => {
        LogInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                setError('');
            })
            .catch(error => {
                setError(error)
                console.log(error);
            })
    }

    // Update User Profile
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
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>
                        </div>
                        <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                            <Link to="/login" className="underline text-gray-800"> Log in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;