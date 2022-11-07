import React from 'react';
import heroImg from '../images/hero.png';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <div className="relative flex align-center h-screen">
      <div className="container">
        <div
            className="hero bg-fixed bg-cover bg-center absolute top-0 left-0 w-full h-full saturate-[120%]"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
          <StaticImage src="../images/logo.png" alt="Tokio Ramen Logo" className="z-[8] w-[300px] md:w-[30vw] absolute left-[6rem] top-[38%] translate-y-[-62%]  drop-shadow-lg" />
          <div className="z-[9] absolute left-0 top-[50%] translate-y-[-50%] pl-10 text-5xl md:text-7xl text-gray-300 mix-blend-color-dodge font-medium uppercase tracking-[.2em] drop-shadow-lg">
            Ramen done right.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;