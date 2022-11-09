import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { signInWithEmailAndPassword } = useContext(AuthContext);



    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card flex-shrink-0 w-4/12 shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className='text-2xl font-semibold text-center'>Login</h2>
                    <p className='text-center'>Login in to access your account</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-success">Login</button>
                    </div>

                    <p className="px-6 text-sm text-center text-gray-600">Don't have an account?
                        <Link rel="noopener noreferrer" to="/register" className="hover:underline text-green-600"> Sign up</Link>.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;