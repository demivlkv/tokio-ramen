import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
    <header>
        <div>
            <div className="fixed top-0 z-50 w-full flex justify-between items-center px-8 py-4 bg-[#1b1b1b] border-b border-gray-300 text-white">
                <div className="Logo">
                    <Link to="/" className="text-3xl font-semibold uppercase transition-all ease-in duration-500 hover:text-[#fe4039]">T<span className="text-[#fe4039]">o</span>kio</Link>
                </div>

                <div className="navigation">
                    <nav>
                        <Link to="#about" className="mx-4">Our History</Link>
                        <Link to="#menu" className="mx-4">Menu</Link>
                        <Link to="#info" className="mx-4">Info</Link>
                        <Link to="#contact" className="ml-4">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Header;