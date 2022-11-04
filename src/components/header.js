import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
    <header>
        <div>
            <div className="fixed top-0 z-50 w-full flex justify-between items-center p-4 bg-gradient-to-b from-white via-[#ffffff9a]">
                <div className="Logo">
                    <Link to="/" className="text-3xl font-semibold uppercase">T<span className="text-[#fe4039]">o</span>kio</Link>
                </div>

                <div className="navigation">
                    <nav>
                        <Link to="/" className="mr-4">Home</Link>
                        <Link to="/our-history" className="mx-4">Our History</Link>
                        <Link to="/menu" className="mx-4">Menu</Link>
                        <Link to="/contact" className="ml-4">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Header;