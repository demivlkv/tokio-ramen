import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Header = () => (
    <header>
        <div>
            <div className="fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-[#1b1b1b] border-b border-gray-300 text-white">
                <div className="logo">
                    <Link to="/" className="text-3xl font-semibold uppercase transition-all ease-in duration-500 hover:text-[#fe4039]">T<span className="text-[#fe4039]">o</span>kio</Link>
                </div>

                <div className="navigation">
                    <nav>
                        <AnchorLink to="#about" title="Our History" className="mr-2 md:mr-4" />
                        <AnchorLink to="#menu" title="Menu" className="mx-2 md:mx-4" />
                        <AnchorLink to="#info" title="Info" className="mx-2 md:mx-4" />
                        <AnchorLink to="#contact" title="Contact" className="mx-2 md:ml-4" />
                    </nav>
                </div>
            </div>
        </div>
    </header>
);

export default Header;