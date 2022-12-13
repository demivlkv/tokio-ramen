import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
// import icons
import { Instagram, Facebook } from 'react-feather';

const Footer = () => (
  <footer>
    <motion.div
      className="fixed z-50 bottom-0 left-0 w-full flex justify-between items-center p-3 bg-[#1b1b1b] border-t border-gray-300 text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <StaticImage
          src="../../images/footer/logo.png"
          alt="Tokio Ramen Mini Logo"
          placeholder="none"
          className="w-[40px]"
        />
      </div>

      <div className="text-xs md:text-base font-normal tracking-wider">
        <p>
          © {new Date().getFullYear()} &middot; T
          <span className="text-[#fe4039]">o</span>kio Ramen. All rights reserved.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <Link to="https://www.instagram.com/tokioramen/" target="_blank">
          <button className="h-[35px] inline-flex items-center mr-1 md:mr-2 text-white hover:text-[#fe4039]">
            <Instagram size={20} />
          </button>
        </Link>
        <Link to="https://www.facebook.com/tokioramenbb" target="_blank">
          <button className="h-[35px] inline-flex items-center ml-1 md:ml-2 text-white hover:text-[#fe4039]">
            <Facebook size={20} />
          </button>
        </Link>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
