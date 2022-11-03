import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
    <header>
        <div>
            <div className="fixed top-0 z-50 w-full flex justify-between items-center p-4 bg-gradient-to-b from-white via-[#ffffff88]">
                <div className="Logo">
                    <Link to="/" className="text-2xl text-[#fe4039] font-semibold uppercase">Tokio</Link>
                </div>

                <div className="navigation">
                    <nav>
                        <Link to="/" className="mr-4 hover:text-[#fe4039]">Home</Link>
                        <Link to="/our-history" className="mx-4 hover:text-[#fe4039]">Our History</Link>
                        <Link to="/menu" className="mx-4 hover:text-[#fe4039]">Menu</Link>
                        <Link to="/contact" className="ml-4 hover:text-[#fe4039]">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Header;