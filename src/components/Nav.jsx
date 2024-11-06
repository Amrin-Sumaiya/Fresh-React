import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-lime-950 p-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link 
                        to="/" 
                        className="text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300">
                        Home
                    </Link>
                    <Link 
                        to="/allevents" 
                        className="text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300">
                        All Events
                    </Link>
                    <Link 
                        to="/event" 
                        className="text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300">
                        Event
                    </Link>
                    <Link to="/userevent" className=" text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-black transiction duration-300">
                    User Event

                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;






