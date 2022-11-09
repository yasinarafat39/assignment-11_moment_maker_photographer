import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';




const Login = () => {
    const { logIn, LogInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const handlLogin = (event) => {
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
                navigate('/');
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
                console.log(user);
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

    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handlLogin} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {
                        error && <p className='text-red'>{error}</p>
                    }
                    <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-50 bg-green-600">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
                    <Link to="/register" className="underline text-gray-800"> Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;