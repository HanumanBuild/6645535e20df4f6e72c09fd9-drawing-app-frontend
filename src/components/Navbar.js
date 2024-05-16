import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <Link to="/" className="text-white text-lg">Drawing App</Link>
                <div className="float-right">
                    <Link to="/login" className="text-white mr-4">Login</Link>
                    <Link to="/signup" className="text-white">Signup</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;