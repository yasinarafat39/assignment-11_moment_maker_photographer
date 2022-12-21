import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

import googleIcon from '../../../assets/Google__Logo.png';


const Login = () => {
    const { logIn, LogInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Login with email and password
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success('Login Success');

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
                setError(error);
                console.log(error);
                toast.error(error);
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
                setError(error);
                toast.error(error);
            })
    }

    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogin} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    {
                        error && <p className='text-red'>{error}</p>
                    }
                    <button type='submit' className="btn w-full bg-[#36D399] hover:bg-[#2BA97A] border-none">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className=" hover:bg-[#515B60] hover:text-white transition mt-4 w-full p-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-green-600">
                        <p className='flex items-center justify-evenly text-xl'>
                            <img src={googleIcon} width="40" height="40" alt="" />
                            Login with Google
                        </p>
                    </button>
                </div>
                <p className="text-md text-center sm:px-6 text-gray-600">Don't have an account?
                    <Link to="/register" className="underline text-gray-800"> Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;