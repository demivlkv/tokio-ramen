import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
    <header>
        <div className="mb-[70px]">
            <div className="fixed top-0 z-50 w-full flex justify-between items-center p-4 bg-[#ddd]">
                <div className="Logo">
                    <Link to="/">TOKIO RAMEN</Link>
                </div>

                <div className="navigation">
                    <nav>
                        <Link to="/" className="mx-2">Home</Link>
                        <Link to="/our-history" className="mx-2">Our History</Link>
                        <Link to="/menu" className="mx-2">Menu</Link>
                        <Link to="/contact" className="ml-2">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Header;