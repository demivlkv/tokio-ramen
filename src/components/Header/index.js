import React, { useState } from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { motion } from 'framer-motion';
// import icons
import Menu from '../Icons/Menu';
import X from '../Icons/X';

const Header = () => {
  const [nav, setNav] = useState(false);
  // show & hide navbar on click
  const handleClick = () => setNav(!nav);

  return (
    <header>
      <motion.div
        className="fixed top-0 z-50 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-[#1b1b1b] border-b border-gray-300 text-white"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="logo">
          <Link to="/" className="text-3xl font-semibold uppercase transition-all ease-in duration-500 hover:text-[#fe4039]">
            T<span className="text-[#fe4039]">o</span>kio
          </Link>
        </div>

        <div className="navigation">
          <nav>
            {/* NAVBAR AT 768PX & ABOVE */}
            <div className="hidden md:flex">
              <AnchorLink to="#about" title="Our History" className="mr-2 md:mr-4" />
              <AnchorLink to="#menu" title="Menu" className="mx-2 md:mx-4" />
              <AnchorLink to="#info" title="Info" className="mx-2 md:mx-4" />
              <AnchorLink to="#contact" title="Contact" className="mx-2 md:ml-4" />
            </div>

            {/* HAMBURGER MENU AT 768PX & LOWER */}
            <div onClick={handleClick} className="md:hidden">
              {!nav ? (
                <Menu />
              ) : (
                <X />
              )}
              <div
                className={
                  !nav
                    ? "mobile-menu"
                    : "mobile-menu active"
                }
              >
                <AnchorLink to="#about" title="Our History" className="mt-8 mb-4" />
                <AnchorLink to="#menu" title="Menu" className="my-4" />
                <AnchorLink to="#info" title="Info" className="my-4" />
                <AnchorLink to="#contact" title="Contact" className="mt-4 mb-8" />
              </div>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  )
}

export default Header
