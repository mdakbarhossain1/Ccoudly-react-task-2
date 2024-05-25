// src/Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/media.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-50 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-xl font-bold text-gray-800">
                                <img src={logo} alt="logo" className='w-1/4' />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" onClick={toggleMenu} className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">Home</Link>
                                <Link to="/categories" onClick={toggleMenu} className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">Categories</Link>
                                <Link to="/products" onClick={toggleMenu} className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">products</Link>

                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={toggleMenu} className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">Home</Link>
                        <Link to="/categories" onClick={toggleMenu} className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">Categories</Link>
                        <Link to="/products" onClick={toggleMenu} className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200">products</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
