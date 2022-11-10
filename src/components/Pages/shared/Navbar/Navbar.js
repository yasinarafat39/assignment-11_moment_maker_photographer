import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo(1).png';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);


    // Log Out System
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Success');
            })
            .catch(err => {
                toast.error(err);
            })
    }

    return (
        <div className=" navbar bg-light max-w-screen-xl mx-auto mb-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services/all">Services</Link></li>
                        <li><Link to="/myreviews">My Reviews</Link></li>

                        <Link className='' to="/"><img src={logo} className="w-[60px] h-[60px] mr-3" alt='Logo' /> <h2 className='text-2xl font-bold font-mono'>M.M PHOTOGRAPHER</h2></Link>
                    </ul>
                </div>
                <Link className='lg:flex  items-center hidden' to="/"><img src={logo} className="w-[60px] h-[60px] mr-3" alt='Logo' /> <h2 className='text-2xl font-bold font-mono'>M.M PHOTOGRAPHER</h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" font-bold menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services/all">Services</Link></li>
                    <li><Link to="/myreviews">My Reviews</Link></li>

                </ul>

            </div>
            <div className="navbar-end">


                {
                    user?.uid ?

                        <div className='flex items-center'>
                            <img title={user.displayName} src={user.photoURL} alt="" className='w-[60px] h-[60px] rounded-full mr-4' />
                            <Link onClick={handleLogOut} className="btn">Log out</Link>
                        </div>
                        :
                        <>
                            <Link to="/login" className="btn mr-3">Login</Link>
                            <Link to="/register" className="btn mr-3">Register</Link>
                        </>
                }
            </div>

        </div>
    );
};

export default Navbar;