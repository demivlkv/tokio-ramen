import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <div className="relative flex align-center h-screen">
        <div className="container">
            <div className="row">
                <p className="z-[9] w-full absolute left-0 top-[50%] translate-y-[-50%] pl-8 text-7xl text-gray-300 mix-blend-color-dodge font-medium uppercase tracking-[.2em] drop-shadow-lg">Ramen done right.</p>
                <div className="hero">
                    <StaticImage src="../images/hero.png" alt="Welcome to Tokio Ramen" className="fixed top-[65px] object-cover h-full w-full z-0 saturate-[1.25]" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;