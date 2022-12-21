import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

import signUpIMG from '../../../assets/MM-Sign-up.png';
import googleIcon from '../../../assets/Google__Logo.png';

const Register = () => {

    const { createNewUser, updateUserProfile, LogInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);

        // Create New User with E-mail and Password
        createNewUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
                handleUpdateUserProfile(name, photoURL)
                toast.success('User Create Successful')
            })
            .catch(err => {
                setError(err);
                toast.error(err);
                console.error(err);
            })
    }

    // Google Login
    const handleGoogleLogin = () => {
        LogInWithGoogle()
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://moment-maker-photographer-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        localStorage.setItem('Photography-Token', data.token);
                        navigate(from, { replace: true });
                    })


                navigate('/')
                setError('');
                toast.success('Login Success');
            })
            .catch(error => {
                setError(error)
                toast.error(error);
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
                    <img src={signUpIMG} alt="sign-up-image" />
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
                            <button type='submit' className="btn  bg-[#36D399] hover:bg-[#2BA97A] border-none">Register</button>
                        </div>

                        <div className="divider">OR</div>

                        <div className="flex justify-center space-x-4">
                            <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className=" hover:bg-[#515B60] hover:text-white transition my-2 w-full p-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-green-600">
                                <p className='flex items-center justify-evenly text-xl'>
                                    <img src={googleIcon} width="40" height="40" alt="" />
                                    Login with Google
                                </p>
                            </button>
                        </div>
                        <p className="text-md text-center sm:px-6 text-gray-600">Already have an account?
                            <Link to="/login" className="underline text-gray-800"> Log in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;