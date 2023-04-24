import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handleLogout = () => {
        LogOut()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="">
            <div className="navbar bg-neutral text-neutral-content flex justify-between mt-0 w-50">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Work Zone</Link>

                <div className='mr-3'>
                    <Link className='mr-4' to="/">Home</Link>
                    <Link className='mr-4' to="/about">About</Link>
                    <Link className='mr-4' to="/blog">Blog</Link>
                    {user &&
                        <Link className='mr-4' to="/contacts">Contacts</Link>
                    }
                    <Link className='mr-4' to="/login">Login </Link>

                    {
                        user ? <button onClick={handleLogout} className="btn btn-accent">Log Out</button> : <Link className='mr-4' to="/register">Register</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;